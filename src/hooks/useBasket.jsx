import { useState } from "react";
import { deepClone, removeObjectById, findObjectById } from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
    const [basket, setBasket] = useState([]);

    const handleAddToBasket = (productToAdd, username) => {
        // Étape 1 : Copie du state
        const basketCopy = deepClone(basket);

        // Étape 2 : Vérification si le produit est déjà dans le panier
        const existingProduct = findObjectById(productToAdd.id, basketCopy);

        if (existingProduct) {
            // Cas 1 : Si le produit est déjà dans le panier, on incrémente la quantitéKB
            existingProduct.quantity += 1;
            setLocalStorage(username, basketCopy)
        } else {
            // Cas 2 : Si le produit n'est pas dans le panier, on l'ajoute au début
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            };
            basketCopy.unshift(newBasketProduct); // Ajoute au début du tableau
            setLocalStorage(username, basketCopy);
        }

        // Étape 3 : Mise à jour du state
        setBasket(basketCopy);
    };

    const handleDeleteBasketProduct = (idBasketProduct) => {
        //1. copy du state (optional because removeObjectById returns a new array )
        const basketCopy = deepClone(basket)

        //2. manip de la copie state
        //const basketUpdated = basketCopy.removeObjectById((product) => product.id !== idBasketProduct)
        const basketUpdated = removeObjectById(idBasketProduct, basketCopy)

        //3. update du state
        setBasket(basketUpdated)
    }

    return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};
