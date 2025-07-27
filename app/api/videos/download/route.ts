import { createClient } from "@/lib/supabase-server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const supabase = createClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { video_id } = await request.json()

    // Check if video exists and is approved
    const { data: video, error: videoError } = await supabase
      .from("videos")
      .select("*")
      .eq("id", video_id)
      .eq("status", "approved")
      .single()

    if (videoError || !video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 })
    }

    // Check if user has already downloaded this video
    const { data: existingDownload } = await supabase
      .from("downloads")
      .select("id")
      .eq("user_id", user.id)
      .eq("video_id", video_id)
      .single()

    if (!existingDownload) {
      // Record the download
      const { error: downloadError } = await supabase.from("downloads").insert({
        user_id: user.id,
        video_id: video_id,
      })

      if (downloadError) {
        return NextResponse.json({ error: downloadError.message }, { status: 400 })
      }

      // Increment download count
      await supabase.rpc("increment_video_downloads", { video_id })
    }

    return NextResponse.json({
      download_url: video.file_url,
      message: "Download authorized",
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
