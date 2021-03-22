import React from 'react';
import { Box, Text } from 'grommet';

export default ({
  date, condition, temperature, rainChance, snowChance, position, ...props
}) => (
  <Box
    width="240px"
    pad="small"
    direction="column"
    background={{ color: '#fff' }}
    elevation="small"
    style={{
      position: 'absolute',
      top: position.y + 20, left: position.x + 10
    }}
    {...props}
  >
    <Box direction="row" align="center" justify="between" wrap={false}>
      <Text size="small" color="gray">{date}</Text>
      <Text color="gray">{`${temperature}°`}</Text>
    </Box>
    <Box pad={{ vertical: 'small' }}>
      <Text color="neutral-2">{condition}</Text>
    </Box>
    <Box>
      <Text size="small">
        {`Rain - ${rainChance}%`}
      </Text>
    </Box>
    <Box>
      <Text size="small">
        {`Snow - ${snowChance}%`}
      </Text>
    </Box>
  </Box>
);
