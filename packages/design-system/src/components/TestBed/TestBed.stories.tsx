import type { Meta, StoryObj } from "@storybook/react-vite";
import { Aside, Box, Card, Cluster, Container, Section, Stack } from "../Box";
import { Text } from "../Text";
import { Button } from "../Button";
import { TwoIcon } from "../../icons/TwoIcon";
import { Icon } from "../Icon";
import { OneIcon } from "../../icons/OneIcon";

const meta: Meta = {
  title: "Playground/TestBed",
};

export default meta;

type Story = StoryObj;

const desktopLayout = "'aside main camera'";

export const HelloWorld: Story = {
  render: () => (
    <Container gridTemplateAreas={desktopLayout} gap={5} maxWidth="1000px">
      <Aside gridArea="aside" alignItems="flex-start">
        <Card>
          <Stack>
            <Text weight="bold" color="secondary">
              Your Provider
            </Text>
            <Box paddingBlock={2} paddingInline={3} background="neutral-subtle">
              <Stack gap={0}>
                <Text>Stevie McCann</Text>
                <Text variant="caption-1">Online</Text>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Aside>
      <Stack gridArea="main" gap={5}>
        <Card justifyContent="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="40"
            viewBox="0 0 130 40"
            fill="none"
            role="presentation"
            className="css-6su6fj"
          >
            <path
              d="M10.4162 12.2973H0.910522V27.4865H10.4162V37.1061L20.9388 40V0L10.4162 2.96523V12.2973ZM18.6145 18.9803C18.9787 18.9803 19.2754 19.4392 19.2754 20.0061C19.2754 20.5731 18.9787 21.0299 18.6145 21.0299C18.2504 21.0299 17.9537 20.571 17.9537 20.0061C17.9537 19.4392 18.2504 18.9803 18.6145 18.9803Z"
              fill="#66CCCC"
            ></path>
            <path
              d="M35.0877 12.2974H25.6761V27.4865H35.0877V12.2974Z"
              fill="#66CCCC"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.7897 17.6733C51.8956 16.5231 50.623 15.9358 49.2808 15.9358C46.3857 15.9358 44.2415 18.1893 44.2415 21.8968C44.2415 25.6758 46.4082 27.8334 49.2808 27.8334C50.6455 27.8334 51.8935 27.2236 52.7897 26.1203V27.552H55.8034V12.2955H52.7897V17.6733ZM52.7897 23.8934C52.2721 24.6439 51.2122 25.1843 50.1995 25.1843C48.5033 25.1843 47.3269 23.8465 47.3269 21.8989C47.3269 19.9268 48.5033 18.589 50.1995 18.589C51.2122 18.589 52.2721 19.1294 52.7897 19.8799V23.8934ZM84.458 31.9835H87.5761L93.9862 16.2192H90.7618L87.7951 24.1054L84.8284 16.2192H81.6243L86.2401 27.7192L84.458 31.9835ZM77.1324 16.2192H80.4756L76.6618 21.7337L80.7354 27.554H77.3923L74.802 23.7302L72.1872 27.554H68.8686L72.8951 21.7337L69.1039 16.2192H72.4471L74.802 19.7167L77.1324 16.2192ZM63.1173 15.9377C59.3732 15.9377 57.1144 18.6603 57.1144 21.8764C57.1144 25.1149 59.3752 27.8374 63.1173 27.8374C66.884 27.8374 69.1448 25.1149 69.1448 21.8764C69.1448 18.6603 66.884 15.9377 63.1173 15.9377ZM63.1173 25.1842C61.2575 25.1842 60.2222 23.6588 60.2222 21.8743C60.2222 20.1144 61.2575 18.5889 63.1173 18.5889C64.9771 18.5889 66.037 20.1144 66.037 21.8743C66.037 23.6588 64.9771 25.1842 63.1173 25.1842ZM108.338 18.0039C108.997 16.9699 110.503 15.938 112.246 15.938C114.341 15.938 115.589 17.0413 115.591 19.3641V27.5542H112.578V20.396C112.578 19.3396 112.107 18.5892 110.883 18.5892C109.824 18.5892 108.952 19.2927 108.529 19.9025V27.5542H105.515V20.396C105.515 19.3396 105.042 18.5892 103.819 18.5892C102.781 18.5892 101.912 19.2927 101.464 19.927V27.5542H98.4745V16.2194H101.464V17.698C101.934 17.0168 103.44 15.938 105.183 15.938C106.855 15.938 107.915 16.7129 108.338 18.0039ZM129.089 22.1802C129.089 18.4727 126.782 15.9377 123.391 15.9377C119.93 15.9377 117.505 18.5889 117.505 21.8764C117.505 25.5146 120.118 27.8374 123.58 27.8374C125.345 27.8374 127.111 27.3215 128.265 26.2651L126.945 24.3399C126.215 25.0435 124.967 25.4656 123.909 25.4656C121.978 25.4656 120.824 24.2685 120.635 22.8369H129.087V22.1802H129.089ZM120.59 20.82C120.732 19.6942 121.532 18.3095 123.391 18.3095C125.37 18.3095 126.123 19.7412 126.192 20.82H120.59ZM92.3204 25.912C92.3204 24.8801 93.192 24.0114 94.2272 24.0114C95.2646 24.0114 96.1341 24.8781 96.1341 25.912C96.1341 26.944 95.2625 27.8127 94.2272 27.8127C93.192 27.8127 92.3204 26.944 92.3204 25.912Z"
              fill="#012F33"
            ></path>
          </svg>
        </Card>
        <Card>
          <Stack gap={2}>
            <Text
              variant="caption-1"
              color="primary-bold"
              transform="uppercase"
              weight="bold"
            >
              Reception
            </Text>
            <Stack gap={1}>
              <Text variant="featured-3" weight="bold">
                Welcome to Stevie McCann's Waiting Room
              </Text>
              <Text>
                Stevie McCann can see that you have checked in and will start
                your call shortly. While you are waiting, we invite you to
                review the information below.
              </Text>
            </Stack>
          </Stack>
        </Card>
        <Card>
          <Stack gap={2}>
            <Text
              variant="caption-1"
              color="primary-bold"
              transform="uppercase"
              weight="bold"
            >
              Professional Information
            </Text>
            <Stack gap={1}>
              <Text variant="featured-3" weight="bold">
                About Me
              </Text>
              <Text>Employe of the month at doxy.me since 2025.</Text>
            </Stack>
          </Stack>
        </Card>
        <Card>
          <Stack gap={2}>
            <Text
              variant="caption-1"
              color="primary-bold"
              transform="uppercase"
              weight="bold"
            >
              Good to know
            </Text>
            <Stack gap={3}>
              <Text variant="featured-3" weight="bold">
                For an optimal experience, please do the following
              </Text>
              <Box background="primary-subtle" padding={3}>
                <Box
                  gap={3}
                  alignItems="flex-start"
                  gridTemplateAreas="'icon text'"
                >
                  <Icon svg={OneIcon} size={6} color="primary-bold" />
                  <Text>
                    If you're using a phone, please{" "}
                    <Text color="secondary" weight="bold">
                      turn on Do Not Disturb/Focus Mode
                    </Text>{" "}
                    to prevent incoming texts and calls from disrupting your
                    call.
                  </Text>
                </Box>
              </Box>
              <Box background="primary-subtle" padding={3}>
                <Box
                  gap={3}
                  alignItems="flex-start"
                  gridTemplateAreas="'icon text'"
                >
                  <Icon svg={TwoIcon} size={6} color="primary-bold" />
                  <Stack gap={1}>
                    <Text color="secondary" weight="bold">
                      Confirm your video and microphone are working
                    </Text>
                    <Text wrap="pretty">
                      a. You should see your video and a green sound indicator
                      when you talk.
                    </Text>
                    <Text wrap="pretty">
                      b. If they are not working please,{" "}
                      <Text color="primary-bold" decoration="underline">
                        restart your device, then check in again.
                      </Text>{" "}
                      or restart your device, then check in again.
                    </Text>
                  </Stack>
                </Box>
              </Box>
              <Box
                background="neutral-subtle"
                paddingInline={3}
                paddingBlock={2}
              >
                <Cluster gap={1}>
                  <Text>If you are having technical issues, checkout our</Text>
                  <Text
                    color="primary-bold"
                    weight="semibold"
                    decoration="underline"
                  >
                    help article
                  </Text>
                </Cluster>
              </Box>
            </Stack>
          </Stack>
        </Card>
      </Stack>
      <Section gridArea="camera" alignItems="flex-start">
        <Stack>
          <Box
            width="100%"
            height="200px"
            background="black"
            borderRadius={2}
          ></Box>
          <Button>Test your audio and video</Button>
        </Stack>
      </Section>
    </Container>
  ),
};
