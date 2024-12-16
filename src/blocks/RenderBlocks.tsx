import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FeatureBlock } from './FeatureBlock/Component'
import { VideoHeroSection } from './VideoHeroSection/Component'
import { PartnershipLogoBlock } from './PartnershipLogoBlock/Component'
import { BlogCard } from './BlogCardBlock/Component'
import { TeamSection } from './TeamSection/Component'
import { PricingSection } from './PricingBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  feature: FeatureBlock,
  teamsection: TeamSection,
  videoherosection: VideoHeroSection,
  partnershiplogoblock: PartnershipLogoBlock,
  blogcardblock: BlogCard,
  pricingsection: PricingSection
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
