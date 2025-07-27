"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Play,
  AlertTriangle,
  Server,
  Database,
  Activity,
  Settings,
  LogOut,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Upload,
  Eye,
  User,
  Bell,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")

  const systemStats = {
    totalUsers: 15420,
    totalCreators: 1250,
    totalVideos: 8900,
    totalDownloads: 125000,
    serverUptime: 99.9,
    storageUsed: 2.4, // TB
    bandwidthUsed: 15.6, // TB this month
  }

  const pendingReviews = [
    {
      id: 1,
      title: "Web開発の最新トレンド 2024",
      creator: "TechGuru",
      uploadDate: "2024-01-15",
      duration: "18:45",
      fileSize: "245MB",
      status: "審査待ち",
    },
    {
      id: 2,
      title: "料理の基本テクニック集",
      creator: "CookingMaster",
      uploadDate: "2024-01-14",
      duration: "22:30",
      fileSize: "320MB",
      status: "審査中",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "user_registration",
      message: "新規ユーザー登録: user@example.com",
      timestamp: "2024-01-15 14:30",
      severity: "info",
    },
    {
      id: 2,
      type: "video_upload",
      message: "動画アップロード: AI開発入門",
      timestamp: "2024-01-15 14:25",
      severity: "info",
    },
    {
      id: 3,
      type: "system_alert",
      message: "サーバー負荷が高くなっています",
      timestamp: "2024-01-15 14:20",
      severity: "warning",
    },
  ]

  const infraMetrics = {
    cloudRun: {
      cpu: 45,
      memory: 62,
      requests: 1250,
    },
    cloudSQL: {
      connections: 85,
      queries: 2400,
      storage: 78,
    },
    cloudStorage: {
      usage: 2.4,
      requests: 15600,
      bandwidth: 890,
    },
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
              <span className="text-xl font-bold text-gray-900">Snap Stream Admin</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <Activity className="w-3 h-3 mr-1" />
                システム正常
              </Badge>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">管理者ダッシュボード</h1>
          <p className="text-gray-600">システム全体の監視、ユーザー管理、コンテンツ審査を行います</p>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総ユーザー数</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs opacity-80 flex items-center">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +12% 今月
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">クリエイター数</CardTitle>
              <Upload className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalCreators.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8% 今月</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総動画数</CardTitle>
              <Play className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalVideos.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+156 今週</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">サーバー稼働率</CardTitle>
              <Server className="h-4 w-4 text-primary-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{systemStats.serverUptime}%</div>
              <p className="text-xs text-muted-foreground">過去30日間</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary-600 data-[state=active]:text-white">
              概要
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-primary-600 data-[state=active]:text-white">
              ユーザー管理
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-primary-600 data-[state=active]:text-white">
              コンテンツ審査
            </TabsTrigger>
            <TabsTrigger
              value="infrastructure"
              className="data-[state=active]:bg-primary-600 data-[state=active]:text-white"
            >
              インフラ監視
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-primary-600 data-[state=active]:text-white"
            >
              分析
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>最近のアクティビティ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            activity.severity === "warning"
                              ? "bg-yellow-500"
                              : activity.severity === "error"
                                ? "bg-red-500"
                                : "bg-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pending Reviews */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>審査待ち動画</CardTitle>
                  <CardDescription>{pendingReviews.length}件の動画が審査待ちです</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingReviews.map((video) => (
                      <div key={video.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-semibold text-sm">{video.title}</h4>
                          <p className="text-xs text-gray-600">
                            by {video.creator} • {video.uploadDate}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-200 hover:bg-green-50 bg-transparent"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            承認
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                          >
                            <XCircle className="w-3 h-3 mr-1" />
                            拒否
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Health */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>システムヘルス</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CPU使用率</span>
                      <span>{infraMetrics.cloudRun.cpu}%</span>
                    </div>
                    <Progress value={infraMetrics.cloudRun.cpu} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>メモリ使用率</span>
                      <span>{infraMetrics.cloudRun.memory}%</span>
                    </div>
                    <Progress value={infraMetrics.cloudRun.memory} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>ストレージ使用率</span>
                      <span>{infraMetrics.cloudSQL.storage}%</span>
                    </div>
                    <Progress value={infraMetrics.cloudSQL.storage} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">ユーザー管理</h2>
              <div className="flex space-x-2">
                <Input placeholder="ユーザー検索..." className="w-64" />
                <Button className="bg-primary-600 hover:bg-primary-700">検索</Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>アクティブユーザー</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,420</div>
                  <p className="text-sm text-gray-600">過去24時間</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>新規登録</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-gray-600">今週</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>停止アカウント</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-sm text-gray-600">今月</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>ユーザー一覧</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* ユーザーリストのサンプル */}
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">山田太郎</h4>
                        <p className="text-sm text-gray-600">yamada@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-primary-100 text-primary-700">一般ユーザー</Badge>
                      <span className="text-sm text-gray-600">2024-01-10</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary-200 hover:border-primary-300 bg-transparent"
                      >
                        詳細
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">コンテンツ審査</h2>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent">
                  一括承認
                </Button>
                <Button variant="outline" className="border-primary-200 hover:border-primary-300 bg-transparent">
                  フィルター
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">審査待ち</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">12</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">承認済み</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">156</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium">拒否</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">8</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium">要確認</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">3</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>審査キュー</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingReviews.map((video) => (
                    <div
                      key={video.id}
                      className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{video.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          by {video.creator} • {video.uploadDate}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>時間: {video.duration}</span>
                          <span>サイズ: {video.fileSize}</span>
                          <Badge variant="outline" className="border-yellow-200 text-yellow-700">
                            {video.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          プレビュー
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          承認
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                        >
                          <XCircle className="w-3 h-3 mr-1" />
                          拒否
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-6">
            <h2 className="text-xl font-semibold">インフラストラクチャ監視</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Cloud Run */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="w-5 h-5 text-primary-500" />
                    <span>Cloud Run</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CPU使用率</span>
                      <span>{infraMetrics.cloudRun.cpu}%</span>
                    </div>
                    <Progress value={infraMetrics.cloudRun.cpu} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>メモリ使用率</span>
                      <span>{infraMetrics.cloudRun.memory}%</span>
                    </div>
                    <Progress value={infraMetrics.cloudRun.memory} className="h-2" />
                  </div>
                  <div className="text-sm text-gray-600">リクエスト数: {infraMetrics.cloudRun.requests}/分</div>
                </CardContent>
              </Card>

              {/* Cloud SQL */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    <span>Cloud SQL</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>接続数</span>
                      <span>{infraMetrics.cloudSQL.connections}/100</span>
                    </div>
                    <Progress value={infraMetrics.cloudSQL.connections} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>ストレージ</span>
                      <span>{infraMetrics.cloudSQL.storage}%</span>
                    </div>
                    <Progress value={infraMetrics.cloudSQL.storage} className="h-2" />
                  </div>
                  <div className="text-sm text-gray-600">クエリ数: {infraMetrics.cloudSQL.queries}/分</div>
                </CardContent>
              </Card>

              {/* Cloud Storage */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="w-5 h-5 text-green-500" />
                    <span>Cloud Storage</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>使用量</span>
                      <span>{infraMetrics.cloudStorage.usage} TB</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>リクエスト数</span>
                      <span>{infraMetrics.cloudStorage.requests}/時</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">帯域幅: {infraMetrics.cloudStorage.bandwidth} GB/時</div>
                </CardContent>
              </Card>
            </div>

            {/* Logs and Alerts */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>システムログ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-mono bg-gray-50 p-4 rounded-lg">
                    <div className="text-green-600">[INFO] 2024-01-15 14:30:15 - User login successful</div>
                    <div className="text-blue-600">[INFO] 2024-01-15 14:29:45 - Video upload completed</div>
                    <div className="text-yellow-600">[WARN] 2024-01-15 14:28:30 - High CPU usage detected</div>
                    <div className="text-green-600">[INFO] 2024-01-15 14:27:12 - Database backup completed</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>アラート設定</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CPU使用率 &gt; 80%</span>
                      <Badge variant="outline" className="border-green-200 text-green-700">
                        有効
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">メモリ使用率 &gt; 90%</span>
                      <Badge variant="outline" className="border-green-200 text-green-700">
                        有効
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">エラー率 &gt; 5%</span>
                      <Badge variant="outline" className="border-green-200 text-green-700">
                        有効
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">ストレージ使用率 &gt; 85%</span>
                      <Badge variant="outline" className="border-green-200 text-green-700">
                        有効
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">分析データ</h2>
              <div className="flex space-x-2">
                <Button
                  variant={selectedTimeRange === "7d" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeRange("7d")}
                  className={selectedTimeRange === "7d" ? "bg-primary-600 hover:bg-primary-700" : ""}
                >
                  7日間
                </Button>
                <Button
                  variant={selectedTimeRange === "30d" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeRange("30d")}
                  className={selectedTimeRange === "30d" ? "bg-primary-600 hover:bg-primary-700" : ""}
                >
                  30日間
                </Button>
                <Button
                  variant={selectedTimeRange === "90d" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeRange("90d")}
                  className={selectedTimeRange === "90d" ? "bg-primary-600 hover:bg-primary-700" : ""}
                >
                  90日間
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm">総ダウンロード数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{systemStats.totalDownloads.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+15% 前期比</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm">総収益</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">¥2,450,000</div>
                  <p className="text-xs text-muted-foreground">+22% 前期比</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm">帯域幅使用量</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{systemStats.bandwidthUsed} TB</div>
                  <p className="text-xs text-muted-foreground">今月</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm">ストレージ使用量</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{systemStats.storageUsed} TB</div>
                  <p className="text-xs text-muted-foreground">総容量の78%</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>ユーザー成長率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 text-primary-400" />
                      <p>グラフエリア（実装時にChart.jsなどを使用）</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>収益推移</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <DollarSign className="w-12 h-12 mx-auto mb-2 text-green-400" />
                      <p>グラフエリア（実装時にChart.jsなどを使用）</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>人気カテゴリー</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>教育</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={85} className="w-32 h-2" />
                      <span className="text-sm">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>エンターテイメント</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={72} className="w-32 h-2" />
                      <span className="text-sm">72%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>技術</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={68} className="w-32 h-2" />
                      <span className="text-sm">68%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>料理</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={45} className="w-32 h-2" />
                      <span className="text-sm">45%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
