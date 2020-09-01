import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...};
    // }
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 4,
        purchasable:false
    }
    updatePurchaseState(newIngredient){
        const ingredients = {
            ...newIngredient
        }
        const sum = Object.keys(ingredients)
                    .map(igKey =>{
                        return ingredients[igKey];
                    })
                    .reduce((sum, el) =>{
                        return sum + el;
                    },0);
        this.setState({purchasable : sum > 0});
    }
    addIngredientHandler = (type) =>{
        this.incrementDecrementIngredient(type, '+');

    }

    removeIngredientHandler = (type) =>{
        this.incrementDecrementIngredient(type, '-')
    }

    incrementDecrementIngredient(type, operation) {
        const oldCount = this.state.ingredients[type];
        let newCount = operation === '+' ? oldCount + 1 : oldCount - 1;
        const newIngredient = {
            ...this.state.ingredients
        };
        newIngredient[type] = newCount;
        const newPrice = 
            operation === '+' ? this.state.totalPrice + INGREDIENT_PRICES[type] :
            this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ ingredients: newIngredient, totalPrice: newPrice });
        this.updatePurchaseState(newIngredient);
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable = {this.state.purchasable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;