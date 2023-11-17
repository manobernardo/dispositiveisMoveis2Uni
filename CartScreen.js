import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useMyContext } from './MyContext'; // Certifique-se de substituir 'seuArquivo' pelo caminho correto

const CartScreen = () => {
    const { cart, removeFromCart, addToCart } = useMyContext();
    const renderCartItem = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
                <Text>{item.name} - ${item.price}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        removeFromCart(item.id)
                        ;
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                    
                </TouchableOpacity>
                
                <Text style={{ marginLeft: 10 }}>Quantidade: {item.quantity}</Text>
                
            </View>
            
        </View>
    );
    const addCartToCart = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
                <Text>{item.name} - ${item.price}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                   onPress={() => {
                    addToCart({ ...product, quantity: selectedQuantity });
                }}
                style={{ padding: 10 }}
            >
                <Image
                    source={{ uri: 'https://www.clker.com/cliparts/s/7/R/k/j/Z/icon-add.svg.hi.png' }}
                    style={{ width: 20, height: 20 }}
                />
                    
                </TouchableOpacity>
                <Text style={{ marginLeft: 10 }}>Quantidade: {item.quantity}</Text>
            </View>
        </View>
    );
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Carrinho de Compras</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCartItem}
                adItem={addCartToCart}
                //removeItem={delToCart}
            />
        </View>
    );
};
export default CartScreen;