import React, { createContext, useState, useEffect } from 'react';
import { getMenuItems } from './MenuApi';


export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuData, setMenuData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const data = await getMenuItems();
                setMenuData(data);
            } catch (error) {
                console.error('Erro ao carregar dados do menu:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    return (
        <MenuContext.Provider value={{ menuData, isLoading }}>
            {children}
        </MenuContext.Provider>
    );
};
