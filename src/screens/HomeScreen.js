import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Box, Image, Typography, Button, Heading } from '../components';

export default function HomeScreen({
	screenProps: { chooseMode, mode },
	...props
}) {
	return (
		<View>
			<Box bg="darkorange" variant={['full']} pt={4} scroll>
				<Box
					bg="darkorange"
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					px={2}
					py={2}
				>
					<Image
						source={{
							uri:
								'https://cdn.vox-cdn.com/thumbor/t1oJf-PHLQfRn7sd3xW1dueKT8M=/0x0:700x353/1200x800/filters:focal(294x121:406x233)/cdn.vox-cdn.com/uploads/chorus_image/image/51616431/ios-10-shrug-emoji.0.png',
						}}
						alt="🤷‍♂️"
						width={125}
						height={50}
					/>

					<Box flexDirection="row" justifyContent="space-between" width={'45%'}>
						<Button variant={['green']} onPress={chooseMode}>
							<Typography type="h5">{mode}</Typography>
						</Button>
						<Button variant={['skeleton', 'green']} onPress={chooseMode}>
							<Typography type="h5">{mode}</Typography>
						</Button>
						<Button variant={['green', 'skeleton']} onPress={chooseMode}>
							<Typography type="h5">login</Typography>
						</Button>
					</Box>
				</Box>
				<Box className="App" mx={1} bg="primary">
					<Box variant="rounded" color="text" p={3}>
						<View
							style={{
								backgroundColor: 'lightgray',
								margin: 5,
							}}
						>
							<Typography type="h1">Hello World H1</Typography>
						</View>
						<View
							style={{
								backgroundColor: 'lightgray',
								margin: 5,
							}}
						>
							<Typography type="h2">Hello World H2</Typography>
						</View>
						<View
							style={{
								backgroundColor: 'lightgray',
								margin: 5,
							}}
						>
							<Typography type="h3">Hello World H3</Typography>
						</View>

						<View
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								backgroundColor: 'lightgray',
							}}
						>
							<View
								style={{
									padding: 0,
									margin: 0,
									alignItems: 'center',
									justifyContent: 'center',
									alignContent: 'flex-start',
								}}
							>
								<Image
									source={{
										uri:
											'https://cdn.vox-cdn.com/thumbor/t1oJf-PHLQfRn7sd3xW1dueKT8M=/0x0:700x353/1200x800/filters:focal(294x121:406x233)/cdn.vox-cdn.com/uploads/chorus_image/image/51616431/ios-10-shrug-emoji.0.png',
									}}
									alt="🤷‍♂️"
									width={125}
									height={50}
								/>
								<View
									style={{
										padding: 0,
										margin: 0,
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'flex-start',
										justifyContent: 'flex-start',
										alignContent: 'flex-start',
									}}
								>
									<Image
										source={{
											uri:
												'https://cdn.vox-cdn.com/thumbor/t1oJf-PHLQfRn7sd3xW1dueKT8M=/0x0:700x353/1200x800/filters:focal(294x121:406x233)/cdn.vox-cdn.com/uploads/chorus_image/image/51616431/ios-10-shrug-emoji.0.png',
										}}
										alt="🤷‍♂️"
										width={125}
										height={50}
									/>
									<View style={{ padding: 0, margin: 0 }}>
										<Typography type="h3">Hello World</Typography>
										<Typography type="h3">Hello World</Typography>
										<Typography type="h3">Hello World</Typography>
										<Typography type="h3">Hello World</Typography>
										<Typography type="h3">Hello World</Typography>
									</View>
									<Image
										source={{
											uri:
												'https://cdn.vox-cdn.com/thumbor/t1oJf-PHLQfRn7sd3xW1dueKT8M=/0x0:700x353/1200x800/filters:focal(294x121:406x233)/cdn.vox-cdn.com/uploads/chorus_image/image/51616431/ios-10-shrug-emoji.0.png',
										}}
										alt="🤷‍♂️"
										width={125}
										height={50}
									/>
								</View>
								<Image
									source={{
										uri:
											'https://cdn.vox-cdn.com/thumbor/t1oJf-PHLQfRn7sd3xW1dueKT8M=/0x0:700x353/1200x800/filters:focal(294x121:406x233)/cdn.vox-cdn.com/uploads/chorus_image/image/51616431/ios-10-shrug-emoji.0.png',
									}}
									alt="🤷‍♂️"
									width={125}
									height={50}
								/>
							</View>
						</View>
					</Box>
				</Box>
			</Box>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null,
};
