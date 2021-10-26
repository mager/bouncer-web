import React from 'react'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Icon } from 'baseui/icon'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { ListItem, ListItemLabel } from 'baseui/list'
import { DeleteAlt, Check } from 'baseui/icon'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { BlockProps } from 'baseui/block'
import { H2 } from 'baseui/typography'
import { StatefulTooltip } from 'baseui/tooltip'

const itemProps: BlockProps = {
  display: 'flex',
}
const labelProps = {
  fontSize: '24px',
}

const Form = ({ address, info, onUpdateSnowflake, onSubmit }) => {
  const [css, theme] = useStyletron()
  const [snowflake, setSnowflake] = React.useState('')
  const i = info
  const completed = i.address_in_list && i.discord_role_set

  const handleSubmit = () => {
    onSubmit(address, snowflake)
  }

  return (
    <Block>
      <FlexGrid
        flexGridColumnCount={2}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        <FlexGridItem {...itemProps}>
          <Block width="100%">
            <ul className={css({ padding: 0 })}>
              <ListItem
                artwork={(props) =>
                  i.address_in_list ? (
                    <Check {...props} color={theme.colors.positive} />
                  ) : (
                    <DeleteAlt {...props} color={theme.colors.negative} />
                  )
                }
              >
                <ListItemLabel {...labelProps}>
                  <H2>
                    <a
                      rel="noreferrer"
                      title="Connet your wallet on Premint to get early access to the Waveblocks drop"
                      target="_blank"
                      href="https://www.premint.xyz/waveblocks/"
                      className={css({
                        color: !i.address_in_list
                          ? theme.colors.accent + '!important'
                          : theme.colors.positive + '!important',
                      })}
                    >
                      Join the Premint list
                    </a>
                  </H2>
                </ListItemLabel>
              </ListItem>
              <ListItem>
                <Block width="100%">
                  <FormControl label={() => <h2>Address</h2>}>
                    <Input disabled value={address} />
                  </FormControl>
                </Block>
              </ListItem>
            </ul>
          </Block>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <ul>
            <ListItem
              artwork={(props) =>
                i.discord_role_set ? (
                  <Check {...props} color={theme.colors.positive} />
                ) : (
                  <DeleteAlt {...props} color={theme.colors.negative} />
                )
              }
            >
              <ListItemLabel>
                <H2
                  className={css({
                    color: !i.address_in_list
                      ? theme.colors.contentInverseTertiary
                      : i.discord_role_set
                      ? theme.colors.positive + '!important'
                      : theme.colors.negative + '!important',
                  })}
                >
                  Request the Premint role on Discord 👇
                </H2>
              </ListItemLabel>
            </ListItem>
            <ListItem>
              {completed ? (
                <Block
                  width="100%"
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                >
                  <H2>You&rsquo;re all set, join the Discord 👉</H2>
                  <Block>
                    <Icon
                      overrides={{
                        Svg: () => (
                          <a href="https://discord.gg/waveblocks">
                            <img
                              src={`/discord-${theme.name}.svg`}
                              width="128"
                              height="128"
                              alt="Discord"
                            />
                          </a>
                        ),
                      }}
                    />
                  </Block>
                </Block>
              ) : (
                <Block width="100%">
                  <FormControl
                    label={() => <h2>Discord Snowflake</h2>}
                    caption={() => (
                      <Block className={css({ cursor: 'help' })}>
                        <StatefulTooltip
                          content={() => (
                            <Block padding={'20px'}>
                              <img src="/instructions.png" width="777px" />
                            </Block>
                          )}
                          returnFocus
                          autoFocus
                        >
                          Grab your snowflake by right clicking on your avatar
                          in a Discord channel, and clicking Copy ID
                        </StatefulTooltip>
                      </Block>
                    )}
                  >
                    <Input
                      onChange={(e) => {
                        const val = e.currentTarget.value
                        setSnowflake(val)
                        return onUpdateSnowflake(val, address)
                      }}
                    />
                  </FormControl>
                  <Button onClick={handleSubmit}>Submit</Button>
                </Block>
              )}
            </ListItem>
          </ul>
        </FlexGridItem>
      </FlexGrid>
    </Block>
  )
}

export default Form
