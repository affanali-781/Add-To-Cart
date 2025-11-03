# Add to Cart Application

A **React + Redux** shopping cart application with TypeScript, MUI, and TailwindCSS. Users can add items to the cart, adjust quantity, remove items, and see real-time price updates. The cart also supports navigation to item details.

## Features

- **Add to Cart**: Add items to the cart from the shop page.  
- **Quantity Management**: Increment or decrement quantity for each item.  
- **Remove Items**: Remove items individually from the cart or the details page.  
- **Real-Time Price Update**: Price updates according to quantity changes.  
- **Empty Cart Feedback**: Displays “Your Cart is Empty” when there are no items.  
- **Item Details Page**: View detailed information about an item, adjust quantity, or remove it.  
- **Responsive Design**: Fully responsive layout using TailwindCSS.  
- **TypeScript Support**: Strong typing for safer code.  
- **Redux for State Management**: Centralized cart state with actions: `ADD`, `DECREMENT`, `REMOVE`.  

## Tech Stack

- **Frontend**: React, TypeScript  
- **State Management**: Redux (Redux Toolkit)  
- **Styling**: TailwindCSS, Material-UI (MUI) Icons & Components  
- **Routing**: React Router DOM  
- **Version Control**: Git  

## Redux Actions

- ADD(item) → Adds an item or increases quantity.
- DECREMENT(item) → Decreases item quantity. If quantity is 1, removes the item.
- REMOVE(item) → Removes an item completely from the cart.

## Installation

Clone the repository:
```bash
git clone https://github.com/affanali-781/Add-To-Cart.git
cd add-to-cart
npm install
npm run dev



