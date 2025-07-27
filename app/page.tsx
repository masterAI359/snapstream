"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Download, Upload, Users, Search, Star, ArrowRight, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredVideos = [
    {
      id: 1,
      title: "プログラミング基礎講座 - HTML/CSS入門",
      creator: "TechMaster",
      thumbnail: "/placeholder.svg?height=200&width=300",
      downloads: 1250,
      rating: 4.8,
      duration: "15:30",
      category: "プログラミング",
      price: "¥500",
    },
    {
      id: 2,
      title: "本格イタリアン料理の作り方",
      creator: "ChefPro",
      thumbnail: "/placeholder.svg?height=200&width=300",
      downloads: 890,
      rating: 4.9,
      duration: "12:45",
      category: "料理",
      price: "¥300",
    },
    {
      id: 3,
      title: "京都の美しい寺院巡り",
      creator: "TravelVlogger",
      thumbnail: "/placeholder.svg?height=200&width=300",
      downloads: 2100,
      rating: 4.7,
      duration: "20:15",
      category: "旅行",
      price: "¥400",
    },
  ]

  const topCreators = [
    {
      id: 1,
      name: "TechMaster",
      avatar: "/placeholder.svg?height=80&width=80",
      videos: 45,
      followers: "12.5K",
      category: "技術",
    },
    {
      id: 2,
      name: "ChefPro",
      avatar: "/placeholder.svg?height=80&width=80",
      videos: 32,
      followers: "8.9K",
      category: "料理",
    },
    {
      id: 3,
      name: "DesignGuru",
      avatar: "/placeholder.svg?height=80&width=80",
      videos: 28,
      followers: "15.2K",
      category: "デザイン",
    },
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: "安全・セキュア",
      description: "厳選されたクリエイターによる高品質な動画コンテンツ",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      title: "高速ダウンロード",
      description: "最新技術による高速で安全なダウンロード",
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "クリエイター支援",
      description: "クリエイターの収益化をサポートする仕組み",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Snap Stream</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/browse" className="text-gray-600 hover:text-primary-600 transition-colors">
                  動画を探す
                </Link>
                <Link href="/creators" className="text-gray-600 hover:text-primary-600 transition-colors">
                  クリエイター
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
                  料金プラン
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-600 hover:text-primary-600">
                  ログイン
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">新規登録</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                高品質な動画を
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                  簡単ダウンロード
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                プロのクリエイターが制作した高品質な動画コンテンツを、
                安全かつ高速にダウンロード。学習からエンターテイメントまで、 あらゆるニーズに対応します。
              </p>

              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="動画を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-primary-500 shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary-600 hover:bg-primary-700">
                  検索
                </Button>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register?type=user">
                  <Button size="lg" className="px-8 py-4 text-lg bg-primary-600 hover:bg-primary-700 text-white">
                    <Download className="w-5 h-5 mr-2" />
                    動画をダウンロード
                  </Button>
                </Link>
                <Link href="/auth/register?type=creator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg border-2 border-primary-200 hover:border-primary-300 text-primary-600 bg-transparent"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    クリエイターとして参加
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video creators working together"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">クリエイターと一緒に</h3>
                  <p className="text-sm opacity-90">高品質なコンテンツを作成・共有</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">総動画数</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary-600 mb-2">5K+</div>
              <div className="text-gray-600">登録クリエイター</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary-600 mb-2">1M+</div>
              <div className="text-gray-600">総ダウンロード数</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary-600 mb-2">100K+</div>
              <div className="text-gray-600">アクティブユーザー</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">注目の動画</h2>
            <p className="text-gray-600 text-lg">人気クリエイターによる高品質なコンテンツ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <Card
                key={video.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <Badge className="absolute top-2 left-2 bg-primary-600" variant="default">
                    {video.category}
                  </Badge>
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-primary-600 px-2 py-1 rounded text-sm font-semibold">
                    {video.price}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2 text-gray-900">{video.title}</CardTitle>
                  <CardDescription className="text-primary-600 font-medium">by {video.creator}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {video.downloads.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {video.rating}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    ダウンロード
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/browse">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-200 hover:border-primary-300 text-primary-600 bg-transparent"
              >
                すべての動画を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">人気クリエイター</h2>
            <p className="text-gray-600 text-lg">才能あふれるクリエイターたちをご紹介</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topCreators.map((creator, index) => (
              <Card
                key={creator.id}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="relative mb-6">
                    <img
                      src={creator.avatar || "/placeholder.svg"}
                      alt={creator.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary-100"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{creator.name}</h3>
                  <Badge variant="secondary" className="mb-4 bg-primary-100 text-primary-700">
                    {creator.category}
                  </Badge>
                  <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-6">
                    <div>
                      <div className="font-semibold text-gray-900">{creator.videos}</div>
                      <div>動画</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{creator.followers}</div>
                      <div>フォロワー</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-primary-200 hover:border-primary-300 text-primary-600 bg-transparent"
                  >
                    プロフィールを見る
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Snap Streamの特徴</h2>
            <p className="text-gray-600 text-lg">安全で高品質な動画ダウンロードサービス</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">今すぐ始めよう</h2>
          <p className="text-xl text-primary-100 mb-8">
            高品質な動画コンテンツの世界へようこそ。 無料でアカウントを作成して、すぐにダウンロードを開始できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register?type=user">
              <Button size="lg" className="px-8 py-4 text-lg bg-white text-primary-600 hover:bg-gray-100">
                無料で始める
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/auth/register?type=creator">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                クリエイターになる
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Snap Stream</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                高品質な動画コンテンツを安全にダウンロードできる プラットフォーム
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">サービス</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/browse" className="hover:text-white transition-colors">
                    動画を探す
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="hover:text-white transition-colors">
                    クリエイター
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    料金プラン
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">サポート</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    ヘルプセンター
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    よくある質問
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">法的情報</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="hover:text-white transition-colors">
                    著作権について
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Snap Stream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
