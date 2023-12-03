import * as React from 'react';
import { Card, Text } from 'react-native-paper';


const MyComponent = ({route}) => {
    const {image, description, title} = route.params
return  (
        <Card>
            <Card.Title title={title}/>
            <Card.Content>
                <Text variant="titleLarge">{title}</Text>
                <Text variant="bodyMedium">{description}</Text>
            </Card.Content>
            <Card.Cover source={{uri: image}}/>

        </Card>
    );
}

export default MyComponent;