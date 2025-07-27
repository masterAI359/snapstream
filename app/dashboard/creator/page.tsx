"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  Play,
  BarChart3,
  DollarSign,
  Eye,
  Download,
  TrendingUp,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Bell,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function CreatorDashboard() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const myVideos = [
    {
      id: 1,
      title: "プログラミング基礎講座 - HTML/CSS入門",
      thumbnail: "/placeholder.svg?height=120&width=200",
      uploadDate: "2024-01-10",
      status: "公開中",
      views: 2500,
      downloads: 450,
      revenue: 12500,
      duration: "15:30",
      category: "プログラミング",
    },
    {
      id: 2,
      title: "本格イタリアン料理の作り方",
      thumbnail: "/placeholder.svg?height=120&width=200",
      uploadDate: "2024-01-05",
      status: "公開中",
      views: 1800,
      downloads: 320,
      revenue: 8900,
      duration: "22:15",
      category: "料理",
    },
    {
      id: 3,
      title: "デザイン思考入門講座",
      thumbnail: "/placeholder.svg?height=120&width=200",
      uploadDate: "2024-01-01",
      status: "審査中",
      views: 0,
      downloads: 0,
      revenue: 0,
      duration: "18:45",
      category: "デザイン",
    },
  ]

  const analytics = {
    totalViews: 4300,
    totalDownloads: 770,
    totalRevenue: 21400,
    monthlyGrowth: 15.2,
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      setUploadSuccess(false)
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setUploadProgress(0)
          setUploadSuccess(true)
          setTimeout(() => setUploadSuccess(false), 3000)
        }
      }, 300)
    }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">クリエイターダッシュボード</h1>
          <p className="text-gray-600">動画の管理、分析、収益確認を一箇所で</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総視聴回数</CardTitle>
              <Eye className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalViews.toLocaleString()}</div>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingUp className="inline w-3 h-3 mr-1" />+{analytics.monthlyGrowth}% 今月
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総ダウンロード数</CardTitle>
              <Download className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalDownloads}</div>
              <p className="text-xs text-muted-foreground">今月 +45 ダウンロード</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総収益</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥{analytics.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">今月 +¥3,200</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">動画数</CardTitle>
              <Play className="h-4 w-4 text-primary-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myVideos.length}</div>
              <p className="text-xs text-muted-foreground">
                公開中: {myVideos.filter((v) => v.status === "公開中").length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList className="bg-white border shadow-sm">
            <TabsTrigger value="videos" className="data-[state=active]:bg-primary-600 data-[state=active]:text-white">
              動画管理
            </TabsTrigger>
            <TabsTrigger value="upload" className="data-[state=active]:bg-primary-600 data-[state=active]:text-white">
              新規アップロード
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-primary-600 data-[state=active]:text-white"
            >
              分析
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-primary-600 data-[state=active]:text-white">
              収益
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">投稿動画</h2>
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                新規アップロード
              </Button>
            </div>

            <div className="space-y-4">
              {myVideos.map((video, index) => (
                <Card
                  key={video.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-32 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span>アップロード: {video.uploadDate}</span>
                              <span>時間: {video.duration}</span>
                              <Badge
                                variant={video.status === "公開中" ? "default" : "secondary"}
                                className={video.status === "公開中" ? "bg-green-500" : "bg-yellow-500"}
                              >
                                {video.status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-6 text-sm">
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1 text-blue-500" />
                                {video.views.toLocaleString()} 視聴
                              </div>
                              <div className="flex items-center">
                                <Download className="w-4 h-4 mr-1 text-green-500" />
                                {video.downloads} DL
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1 text-primary-500" />¥
                                {video.revenue.toLocaleString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary-200 hover:border-primary-300 text-primary-600 bg-transparent"
                            >
                              <Edit className="w-4 h-4 mr-1" />
                              編集
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-200 hover:border-blue-300 text-blue-600 bg-transparent"
                            >
                              <BarChart3 className="w-4 h-4 mr-1" />
                              分析
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-200 hover:border-red-300 text-red-600 bg-transparent"
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              削除
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>新しい動画をアップロード</CardTitle>
                <CardDescription>高品質な動画をアップロードして、視聴者と収益を獲得しましょう</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {uploadSuccess && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">動画のアップロードが完了しました！審査後に公開されます。</span>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="video-file">動画ファイル</Label>
                  <div className="border-2 border-dashed border-primary-200 rounded-lg p-8 text-center bg-primary-50/50">
                    <Upload className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">動画ファイルをドラッグ&ドロップまたはクリックして選択</p>
                    <p className="text-sm text-gray-500 mb-4">MP4, MOV, AVI形式をサポート（最大2GB）</p>
                    <input
                      id="video-file"
                      type="file"
                      accept="video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => document.getElementById("video-file")?.click()}
                      disabled={isUploading}
                      className="bg-primary-600 hover:bg-primary-700 text-white"
                    >
                      ファイルを選択
                    </Button>
                  </div>
                  {isUploading && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>アップロード中...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">タイトル</Label>
                    <Input
                      id="title"
                      placeholder="動画のタイトルを入力"
                      className="h-12 border-gray-200 focus:border-primary-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">カテゴリー</Label>
                    <select className="w-full h-12 p-3 border border-gray-200 rounded-md focus:border-primary-500 focus:ring-primary-500">
                      <option>プログラミング</option>
                      <option>料理</option>
                      <option>デザイン</option>
                      <option>旅行</option>
                      <option>教育</option>
                      <option>エンターテイメント</option>
                      <option>その他</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">説明</Label>
                  <Textarea
                    id="description"
                    placeholder="動画の詳細な説明を入力してください"
                    rows={4}
                    className="border-gray-200 focus:border-primary-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price">価格（円）</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="500"
                      className="h-12 border-gray-200 focus:border-primary-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">タグ</Label>
                    <Input
                      id="tags"
                      placeholder="タグをカンマ区切りで入力"
                      className="h-12 border-gray-200 focus:border-primary-500"
                    />
                  </div>
                </div>

                <Button
                  className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-medium"
                  disabled={isUploading}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  動画を公開
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold">分析データ</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>視聴回数の推移</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2 text-primary-400" />
                      <p>グラフエリア（実装時にChart.jsなどを使用）</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>ダウンロード数の推移</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                      <p>グラフエリア（実装時にChart.jsなどを使用）</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>人気動画ランキング</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myVideos
                    .sort((a, b) => b.views - a.views)
                    .map((video, index) => (
                      <div
                        key={video.id}
                        className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-2xl font-bold text-primary-400">#{index + 1}</div>
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-16 h-10 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{video.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{video.views.toLocaleString()} 視聴</span>
                            <span>{video.downloads} DL</span>
                            <Badge variant="secondary" className="bg-primary-100 text-primary-700">
                              {video.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <h2 className="text-xl font-semibold">収益管理</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardHeader>
                  <CardTitle>今月の収益</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">¥3,200</div>
                  <p className="text-sm opacity-80">前月比 +15%</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>未払い残高</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">¥18,200</div>
                  <p className="text-sm text-gray-600">次回支払い予定日: 2024-02-01</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>総収益</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">¥{analytics.totalRevenue.toLocaleString()}</div>
                  <p className="text-sm text-gray-600">開始以来の累計</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>収益詳細</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myVideos.map((video) => (
                    <div
                      key={video.id}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-16 h-10 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold">{video.title}</h4>
                          <p className="text-sm text-gray-600">{video.downloads} ダウンロード</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-lg">¥{video.revenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">
                          ¥{Math.round(video.revenue / video.downloads || 0)} / DL
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
