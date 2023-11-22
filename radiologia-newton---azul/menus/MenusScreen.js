import React, { useState, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ItemMenu from './ItemMenu';
import Card from './Card';
import { MenuContext } from "./menuContext";

const MenuComponent = ({ navigation, route }) => {
    const { menuData } = useContext(MenuContext);
    const  idMenuBase  = route.params?.index;
    const [activeMenuId, setActiveMenuId] = useState(null); // Estado para armazenar o ID do menu ativo

    const renderMenuItem = ({ item }) => {
        return (
            <View>
                <ItemMenu
                    label={item.name}
                    icon={'tooth'}
                    onPress={() => {
                        setActiveMenuId(item.id === activeMenuId ? null : item.id); // Alterna o estado ativo
                    }}
                />
                {item.id === activeMenuId && item.children && item.children.map(child => (
                    <Card
                        key={child.id}
                        title={child.name}
                        subTitle={child.description}
                        image={child.image}
                        onPress={() => navigation.navigate('xray', { id: child.id })}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={styles.main}>
            <FlatList
                data={menuData[idMenuBase].children}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#EBF7FD',
    },
    // Estilos adicionais, se necessário
});

export default MenuComponent;
