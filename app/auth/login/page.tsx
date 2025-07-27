"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, User, Upload, Shield, Eye, EyeOff, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("user")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { signIn } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const { data, error } = await signIn(email, password)

      if (error) {
        setError(error.message)
        return
      }

      if (data.user) {
        // ユーザータイプに応じてリダイレクト
        const userMetadata = data.user.user_metadata
        const redirectPath =
          userMetadata?.user_type === "admin"
            ? "/dashboard/admin"
            : userMetadata?.user_type === "creator"
              ? "/dashboard/creator"
              : "/dashboard/user"

        router.push(redirectPath)
      }
    } catch (err: any) {
      setError("ログインに失敗しました。もう一度お試しください。")
    } finally {
      setIsLoading(false)
    }
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
            <CardTitle className="text-2xl font-bold text-gray-900">ログイン</CardTitle>
            <CardDescription className="text-gray-600">
              アカウントにログインしてサービスをご利用ください
            </CardDescription>
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
                  <p className="text-sm text-primary-700">動画をダウンロードしてお楽しみください</p>
                </div>
              </TabsContent>
              <TabsContent value="creator" className="mt-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-700">動画を投稿して収益を得ましょう</p>
                </div>
              </TabsContent>
              <TabsContent value="admin" className="mt-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">システム管理機能にアクセス</p>
                </div>
              </TabsContent>
            </Tabs>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  メールアドレス
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="パスワードを入力"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <Button
                type="submit"
                className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "ログイン中..." : "ログイン"}
              </Button>
            </form>

            <div className="space-y-4 text-center">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
              >
                パスワードを忘れた方
              </Link>
              <div className="text-sm text-gray-600">
                アカウントをお持ちでない方は{" "}
                <Link
                  href="/auth/register"
                  className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
                >
                  新規登録
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
