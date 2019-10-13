import React from 'react'
import { storiesOf } from '@storybook/react'
import {LyricsCard} from './LyricsCard'

const lyrics = `"\"Take a litle walk to the edge of town\\nGo across the tracks\\nWhere the viaduct looms,\\nlike a bird of doom\\nAs it shifts and cracks\\nWhere secrets lie in the border fires,\\nin the humming wires\\nHey man, you know\\nyou're never coming back\\nPast the square, past the bridge,\\npast the mills, past the stacks\\nOn a gathering storm comes\\na tall handsome man\\nIn a dusty black coat with\\na red right hand\\n\\nHe'll wrap you in his arms,\\ntell you that you've been a good boy\\nHe'll rekindle all the dreams\\nit took you a lifetime to destroy\\nHe'll reach deep into the hole,\\nheal your shrinking soul\\nHey buddy, you know you're\\nnever ever coming back\\n...\\n\\n******* This Lyrics is NOT for Commercial use *******\\n(1409618559236)\"",
"image": "https://i.scdn.co/image/90f84d438b0b2df24a388345f4e6f3433a50f6ca"`

storiesOf('LyricsCard', module)
  .add('LyricsCard', () => (
      <LyricsCard lyrics={lyrics} />
  ))
