import React from 'react'
import { Block } from 'baseui/block'
import { Icon } from 'baseui/icon'
import { useStyletron } from 'baseui'

const Footer = () => {
  const [css, theme] = useStyletron()

  return (
    <Block
      display="flex"
      justifyContent="center"
      className={css({
        marginTop: '2rem',
        paddingTop: '2rem',
        textAlign: 'center',
        borderTop: `1px solid ${theme.colors.mono400}`,
      })}
    >
      <Block marginRight={theme.sizing.scale1200}>
        <Icon
          overrides={{
            Svg: () => (
              <a href="https://discord.gg/waveblocks">
                <img
                  src={`/discord-${theme.name}.svg`}
                  width="32"
                  height="32"
                  alt="Discord"
                />
              </a>
            ),
          }}
        />
      </Block>
      <Block>
        <Icon
          overrides={{
            Svg: () => (
              <a href="https://twitter.com/waveblocks">
                <img
                  src={`/twitter-${theme.name}.svg`}
                  width="32"
                  height="32"
                  alt="Twitter"
                />
              </a>
            ),
          }}
        />
      </Block>
    </Block>
  )
}

export default Footer
