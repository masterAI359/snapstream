"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Play, User, Upload, Shield, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [userType, setUserType] = useState("user")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const { signUp } = useAuth()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // バリデーション
      if (formData.password !== formData.confirmPassword) {
        setError("パスワードが一致しません")
        return
      }
      if (!formData.agreeToTerms) {
        setError("利用規約に同意してください")
        return
      }
      if (formData.password.length < 8) {
        setError("パスワードは8文字以上で入力してください")
        return
      }

      const { data, error } = await signUp(formData.email, formData.password, {
        name: formData.name,
        user_type: userType,
      })

      if (error) {
        setError(error.message)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/auth/login")
      }, 2000)
    } catch (err: any) {
      setError("登録に失敗しました。もう一度お試しください。")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in">
          <CardContent className="pt-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">登録完了！</h2>
            <p className="text-gray-600 mb-4">
              確認メールを送信しました。メールを確認してアカウントを有効化してください。
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-lg">
              <Play className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Snap Stream</span>
          </Link>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-gray-900">新規登録</CardTitle>
            <CardDescription className="text-gray-600">アカウントを作成してサービスを開始しましょう</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={userType} onValueChange={setUserType}>
              <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                <TabsTrigger
                  value="user"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary-600 data-[state=active]:text-white"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">ユーザー</span>
                </TabsTrigger>
                <TabsTrigger
                  value="creator"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary-600 data-[state=active]:text-white"
                >
                  <Upload className="w-4 h-4" />
                  <span className="hidden sm:inline">クリエイター</span>
                </TabsTrigger>
                <TabsTrigger
                  value="admin"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary-600 data-[state=active]:text-white"
                >
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">管理者</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="user" className="mt-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-700">無料で動画をダウンロード開始</p>
                </div>
              </TabsContent>
              <TabsContent value="creator" className="mt-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-700">動画を投稿して収益化</p>
                </div>
              </TabsContent>
              <TabsContent value="admin" className="mt-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">管理者権限でシステム運用</p>
                </div>
              </TabsContent>
            </Tabs>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  お名前
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="山田太郎"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  メールアドレス
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  パスワード
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="8文字以上のパスワード"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  パスワード確認
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="パスワードを再入力"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
                />
                <Label htmlFor="terms" className="text-sm">
                  <Link href="/terms" className="text-primary-600 hover:underline">
                    利用規約
                  </Link>
                  および
                  <Link href="/privacy" className="text-primary-600 hover:underline">
                    プライバシーポリシー
                  </Link>
                  に同意します
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "アカウント作成中..." : "アカウント作成"}
              </Button>
            </form>

            <div className="text-center">
              <div className="text-sm text-gray-600">
                すでにアカウントをお持ちの方は{" "}
                <Link
                  href="/auth/login"
                  className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
                >
                  ログイン
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
