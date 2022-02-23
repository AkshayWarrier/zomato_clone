import React from "react";
import Restraunt from './Restraunt';
import './Restraunts.css';

const Restraunts = () => {
    return (
        <div className="restraunts">
            <h1 className = "title">Restraunts near you</h1>
            <div className="restraunts-container">
                <Restraunt name = "Biryani Blues" image = {require('./images/bb.jpg')} rating = "4.5" tags = "North Indian, Fast Food"/>
                <Restraunt name = "The Burger Club" image = {require('./images/bclub.jpg')} rating = "4.5" tags = "Burger, Fast Food"/>
                <Restraunt name = "Behrouz Biryani" image = {require('./images/behr.jpg')} rating = "4.5" tags = "North Indian, Fast Food"/>

                <Restraunt name = "Belgian Waffle Co." image = {require('./images/belgian.jpg')} rating = "4.5" tags = "Waffle, Dessert"/>
                <Restraunt name = "Berco's" image = {require('./images/berco.jpg')} rating = "4.5" tags = "Chinese, Asian"/>
                <Restraunt name = "Burger King" image = {require('./images/bk.jpg')} rating = "4.5" tags = "Burger, Fast Food"/>

                <Restraunt name = "Burger Singh" image = {require('./images/bs.jpg')} rating = "4.5" tags = "Burger, Fast Food"/>
                <Restraunt name = "Dunkin' Donuts" image = {require('./images/dd.jpg')} rating = "4.5" tags = "Donuts, Dessert, Fast Food"/>
                <Restraunt name = "Domino's" image = {require('./images/dom.jpg')} rating = "4.5" tags = "Pizza, Fast Food"/>

                <Restraunt name = "Giani's" image = {require('./images/giani.jpg')} rating = "4.5" tags = "Ice Cream, Dessert"/>
                <Restraunt name = "Instapizza" image = {require('./images/insta.jpg')} rating = "4.5" tags = "Pizza, Fast Food"/>
                <Restraunt name = "KFC" image = {require('./images/kfc.jpg')} rating = "4.5" tags = "Burger, Fast Food"/>

                <Restraunt name = "La Pino'z Pizza" image = {require('./images/lapino.jpg')} rating = "4.5" tags = "Pizza, Fast Food"/>
                <Restraunt name = "Mc Donald's" image = {require('./images/mc.jpg')} rating = "4.5" tags = "Burger, Fast Food"/>
                <Restraunt name = "Moti Mahal" image = {require('./images/moti.jpg')} rating = "4.5" tags = "North Indian, Mughlai"/>

                <Restraunt name = "RollsKing" image = {require('./images/rollk.jpg')} rating = "4.5" tags = "Rolls, Fast Food"/>
                <Restraunt name = "Slice of Italy" image = {require('./images/slice.jpg')} rating = "4.5" tags = "Pizza, Fast Food"/>
                <Restraunt name = "Subway" image = {require('./images/sub.jpg')} rating = "4.5" tags = "Sandwich, Fast Food"/>
            </div>
        </div>
    );
}

export default Restraunts;