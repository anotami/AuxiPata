'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Users, Copy, Check, X } from 'lucide-react'
import { generateReferralCode } from '@/lib/utils'

function ReferralBannerInner() {
  const searchParams = useSearchParams()
  const [myCode, setMyCode] = useState('')
  const [activeRef, setActiveRef] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Get or create the user's own referral code
    let code = localStorage.getItem('auxipata_mycode')
    if (!code) {
      code = generateReferralCode()
      localStorage.setItem('auxipata_mycode', code)
    }
    setMyCode(code)

    // Check if visitor arrived with a referral
    const ref = searchParams.get('ref')
    if (ref) {
      const expiry = Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 days
      localStorage.setItem('auxipata_ref', ref)
      localStorage.setItem('auxipata_ref_expiry', String(expiry))
      setActiveRef(ref)
    } else {
      const stored = localStorage.getItem('auxipata_ref')
      const expiry = Number(localStorage.getItem('auxipata_ref_expiry') ?? 0)
      if (stored && Date.now() < expiry) {
        setActiveRef(stored)
      } else {
        localStorage.removeItem('auxipata_ref')
        localStorage.removeItem('auxipata_ref_expiry')
      }
    }
  }, [searchParams])

  function copyLink() {
    const url = `${window.location.origin}?ref=${myCode}`
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (dismissed) return null

  return (
    <div className="relative">
      {/* Discount banner for visitors with active referral */}
      {activeRef && (
        <div className="bg-gradient-to-r from-accent/20 to-primary/20 border-b border-accent/30 px-4 py-3">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-2xl">🎉</span>
              <div>
                <span className="font-black text-accent">¡10% de descuento activado!</span>
                <span className="text-gray-300 ml-2">
                  Un pata te recomendó AuxiPata. El descuento se aplica automáticamente al pedir.
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('auxipata_ref')
                localStorage.removeItem('auxipata_ref_expiry')
                setDismissed(true)
              }}
              className="text-gray-500 hover:text-white flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Share referral link */}
      {myCode && (
        <div className="bg-brand-card border-b border-brand-border px-4 py-3">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Users size={16} className="text-primary flex-shrink-0" />
              <span>
                <span className="text-white font-medium">Refiere a tus patas:</span>
                {' '}Si compran con tu link, ellos obtienen 10% off.
              </span>
            </div>
            <button
              onClick={copyLink}
              className="flex items-center gap-2 bg-primary/15 hover:bg-primary/25 border border-primary/30 text-primary text-sm font-bold px-4 py-2 rounded-full transition-all flex-shrink-0"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? '¡Link copiado!' : `Copiar mi link (${myCode})`}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ReferralBanner() {
  return (
    <Suspense fallback={null}>
      <ReferralBannerInner />
    </Suspense>
  )
}
