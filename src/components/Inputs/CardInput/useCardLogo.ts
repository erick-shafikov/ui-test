import { useEffect, useState } from 'react'

import MaestroSVG from '../../../assets/card-logos/maestro.svg'
import MastercardSVG from '../../../assets/card-logos/mastercard.svg'
import MirSVG from '../../../assets/card-logos/mir.svg'
import UnionPaySVG from '../../../assets/card-logos/unionpay.svg'
import VisaElectronSVG from '../../../assets/card-logos/visa-electron.svg'
import VisaSVG from '../../../assets/card-logos/visa.svg'

// ----------------------------------------------------------------------

type CardLabel = (typeof CardLabels)[number]

// ----------------------------------------------------------------------

const CARD_LABEL_MIR = 'mir' as const
const CARD_LABEL_VISA_ELECTRON = 'visa-electron' as const
const CARD_LABEL_VISA = 'visa' as const
const CARD_LABEL_UNIONPAY = 'unionpay' as const
const CARD_LABEL_MASTERCARD = 'mastercard' as const
const CARD_LABEL_MAESTRO = 'maestro' as const

const CardLabels = [
  CARD_LABEL_MIR,
  CARD_LABEL_VISA_ELECTRON,
  CARD_LABEL_VISA,
  CARD_LABEL_UNIONPAY,
  CARD_LABEL_MASTERCARD,
  CARD_LABEL_MAESTRO,
] as const

// ----------------------------------------------------------------------

const cardPanTestsByLabels: Record<CardLabel, RegExp> = {
  [CARD_LABEL_MIR]: /^(220[0-4]|22(2[1-9]|[3-9])|2[3-6]|27([0-1]|20))/,
  [CARD_LABEL_VISA_ELECTRON]: /^(4026|417500|4508|4844|4913|4917)/,
  [CARD_LABEL_VISA]: /^4/,
  [CARD_LABEL_UNIONPAY]: /^(62|88)/,
  [CARD_LABEL_MASTERCARD]: /^5[1-5]/,
  [CARD_LABEL_MAESTRO]: /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)/,
}

const getCardLabel = (cardNumber: string) => {
  const label = CardLabels.find((label) => {
    const regex = cardPanTestsByLabels[label]
    return regex.test(cardNumber)
  })

  return label ?? null
}

// ----------------------------------------------------------------------

const cardLogosByLabel = {
  [CARD_LABEL_MIR]: MirSVG,
  [CARD_LABEL_VISA_ELECTRON]: VisaElectronSVG,
  [CARD_LABEL_VISA]: VisaSVG,
  [CARD_LABEL_UNIONPAY]: UnionPaySVG,
  [CARD_LABEL_MASTERCARD]: MastercardSVG,
  [CARD_LABEL_MAESTRO]: MaestroSVG,
}

const getCardLogo = (cardLabel: CardLabel | null) => {
  return cardLabel ? cardLogosByLabel[cardLabel] : null
}

// ----------------------------------------------------------------------

export const useCardLogo = (cardPan?: string) => {
  const [cardLabel, setCardLabel] = useState<CardLabel | null>(null)
  const CardLogo = getCardLogo(cardLabel)

  useEffect(() => {
    if (!cardPan) {
      setCardLabel(null)
    } else {
      const detectedCardLabel = getCardLabel(cardPan)

      if (detectedCardLabel) {
        setCardLabel(detectedCardLabel)
      } else {
        setCardLabel(null)
      }
    }
  }, [cardPan])

  return CardLogo
}
