import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find } from "../utils/array";

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    const handleAddToBasket = (productToAdd) => {
        // Étape 1 : Copie du state
        const basketCopy = deepClone(basket);

        // Étape 2 : Vérification si le produit est déjà dans le panier
        const existingProduct = find(productToAdd.id, basketCopy);

        if (existingProduct) {
            // Cas 1 : Si le produit est déjà dans le panier, on incrémente la quantitéKB
            existingProduct.quantity += 1;
        } else {
            // Cas 2 : Si le produit n'est pas dans le panier, on l'ajoute au début
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            };
            basketCopy.unshift(newBasketProduct); // Ajoute au début du tableau
        }

        // Étape 3 : Mise à jour du state
        setBasket(basketCopy);
    };

    return { basket, handleAddToBasket };
};
