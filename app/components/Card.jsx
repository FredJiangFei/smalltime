import React from 'react';
import { Box, AspectRatio, Pressable, Text, Stack, Image } from 'native-base';

export default function Card({ desc, imageUrl, onPress }) {
  return (
    <Pressable onPress={() => onPress(imageUrl)} mb="2">
      <Box
        shadow="2"
        rounded="lg"
        _light={{ bg: 'coolGray.50' }}
        _dark={{ bg: 'gray.700' }}
      >
        {imageUrl && (
          <AspectRatio
            w="100%"
            ratio={{
              base: 3 / 4,
            }}
          >
            <Image
              source={{
                uri: imageUrl,
              }}
              alt="image base"
            />
          </AspectRatio>
        )}

        <Stack space="2" p="4">
          <Text isTruncated noOfLines={['4', '4', '4']}>
            {desc}
          </Text>
        </Stack>
      </Box>
    </Pressable>
  );
}
