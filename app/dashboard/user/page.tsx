"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Search,
  Star,
  Clock,
  Play,
  Heart,
  Filter,
  Grid,
  List,
  Settings,
  LogOut,
  Bell,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [downloadProgress, setDownloadProgress] = useState<{ [key: number]: number }>({})

  const downloadHistory = [
    {
      id: 1,
      title: "プログラミング基礎講座 - HTML/CSS入門",
      creator: "TechMaster",
      thumbnail: "/placeholder.svg?height=120&width=200",
      downloadDate: "2024-01-15",
      fileSize: "245MB",
      duration: "15:30",
      category: "プログラミング",
      progress: 100,
    },
    {
      id: 2,
      title: "本格イタリアン料理の作り方",
      creator: "ChefPro",
      thumbnail: "/placeholder.svg?height=120&width=200",
      downloadDate: "2024-01-14",
      fileSize: "180MB",
      duration: "12:45",
      category: "料理",
      progress: 100,
    },
  ]

  const favorites = [
    {
      id: 3,
      title: "京都の美しい寺院巡り",
      creator: "TravelVlogger",
      thumbnail: "/placeholder.svg?height=120&width=200",
      rating: 4.8,
      duration: "20:15",
      category: "旅行",
      price: "¥400",
    },
  ]

  const recommendations = [
    {
      id: 4,
      title: "プログラミング実践講座",
      creator: "CodeMaster",
      thumbnail: "/placeholder.svg?height=120&width=200",
      rating: 4.9,
      downloads: 1500,
      duration: "18:20",
      category: "プログラミング",
      price: "¥600",
    },
    {
      id: 5,
      title: "デザイン思考入門",
      creator: "DesignGuru",
      thumbnail: "/placeholder.svg?height=120&width=200",
      rating: 4.7,
      downloads: 890,
      duration: "14:30",
      category: "デザイン",
      price: "¥450",
    },
  ]

  const handleDownload = (videoId: number) => {
    setDownloadProgress((prev) => ({ ...prev, [videoId]: 0 }))

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        const currentProgress = prev[videoId] || 0
        if (currentProgress >= 100) {
          clearInterval(interval)
          return prev
        }
        return { ...prev, [videoId]: currentProgress + 10 }
      })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Snap Stream</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                設定
              </Button>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  ログアウト
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">おかえりなさい！</h1>
          <p className="text-gray-600">新しい動画を発見して、お気に入りのコンテンツをダウンロードしましょう</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 border-0 shadow-lg animate-fade-in">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="動画を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-primary-500"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-200 hover:border-primary-300 text-primary-600 bg-transparent"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  フィルター
                </Button>
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">検索</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総ダウンロード数</CardTitle>
              <Download className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                今月 +3 ダウンロード
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">お気に入り</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">今週 +2 追加</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">視聴時間</CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.5h</div>
              <p className="text-xs text-muted-foreground">今月の合計時間</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="downloads" className="space-y-6">
          <TabsList className="bg-white border shadow-sm">
            <TabsTrigger
              value="downloads"
              className="data-[state=active]:bg-primary-600 data-[state=active]:text-white"
            >
              ダウンロード履歴
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="data-[state=active]:bg-primary-600 data-[state=active]:text-white"
            >
              お気に入り
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="data-[state=active]:bg-primary-600 data-[state=active]:text-white"
            >
              おすすめ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="downloads" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">ダウンロード履歴</h2>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-primary-600 hover:bg-primary-700" : ""}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-primary-600 hover:bg-primary-700" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {downloadHistory.map((video, index) => (
                <Card
                  key={video.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className={viewMode === "grid" ? "w-full h-32 object-cover" : "w-24 h-16 object-cover"}
                    />
                    {viewMode === "list" && (
                      <div className="flex-1 p-4">
                        <h3 className="font-semibold mb-1">{video.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {video.creator}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{video.downloadDate}</span>
                          <span>{video.fileSize}</span>
                          <span>{video.duration}</span>
                          <Badge variant="secondary" className="bg-primary-100 text-primary-700">
                            {video.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </div>
                  {viewMode === "grid" && (
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">by {video.creator}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{video.downloadDate}</span>
                        <Badge variant="secondary" className="bg-primary-100 text-primary-700">
                          {video.category}
                        </Badge>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <h2 className="text-xl font-semibold">お気に入り</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((video, index) => (
                <Card
                  key={video.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-primary-600 px-2 py-1 rounded text-sm font-semibold">
                      {video.price}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {video.creator}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm">{video.rating}</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary-100 text-primary-700">
                        {video.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <h2 className="text-xl font-semibold">あなたにおすすめ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((video, index) => (
                <Card
                  key={video.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-primary-600 px-2 py-1 rounded text-sm font-semibold">
                      {video.price}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {video.creator}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{video.rating}</span>
                        <span>•</span>
                        <span>{video.downloads} DL</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary-100 text-primary-700">
                        {video.category}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {downloadProgress[video.id] !== undefined ? (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>ダウンロード中...</span>
                            <span>{downloadProgress[video.id]}%</span>
                          </div>
                          <Progress value={downloadProgress[video.id]} className="h-2" />
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                          onClick={() => handleDownload(video.id)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          ダウンロード
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
