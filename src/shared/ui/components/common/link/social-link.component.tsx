import type { SocialNetwork } from '@/modules/social-network/server/domain/social-network'
import { Facebook, Github, Instagram, Linkedin, TikTok, Twitch, Twitter, Video, Youtube } from '@ui/icons'
import type { FC, ReactElement } from 'react'
import { IconButton } from '../button/icon-button.component'

interface Props {
  socialNetwork: SocialNetwork
  url: URL
}
export const SocialLink: FC<Props> = props => {
  const { url, socialNetwork } = props
  return (
    <IconButton asChild>
      <a href={url.toString()} target="_blank" rel="noopener noreferrer" className="h-6 w-6 text-xl">
        {SocialIcons[socialNetwork]}
      </a>
    </IconButton>
  )
}

const SocialIcons: Record<SocialNetwork, ReactElement> = {
  facebook: <Facebook />,
  instagram: <Instagram />,
  twitter: <Twitter />,
  vimeo: <Video />,
  youtube: <Youtube />,
  twitch: <Twitch />,
  linkedin: <Linkedin />,
  tiktok: <TikTok />,
  github: <Github />,
  x: <Twitter />,
}
