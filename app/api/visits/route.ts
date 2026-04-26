import { NextResponse } from 'next/server'

async function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  try {
    const { Redis } = await import('@upstash/redis')
    return new Redis({ url, token })
  } catch {
    return null
  }
}

export async function POST() {
  const redis = await getRedis()
  if (!redis) return NextResponse.json({ count: null })
  try {
    const count = await redis.incr('auxipata:visits')
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: null })
  }
}

export async function GET() {
  const redis = await getRedis()
  if (!redis) return NextResponse.json({ count: null })
  try {
    const count = (await redis.get<number>('auxipata:visits')) ?? 0
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: null })
  }
}
