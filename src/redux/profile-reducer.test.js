import React from "react";
import ReactDOM from "react-dom";
import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: "Привет. Как твои дела", likesCount: 12},
        {id: 2, message: "Отлично", likesCount: 11},
        {id: 3, message: "Какие планы?", likesCount: 15},
        {id: 4, message: "Буду отдыхать", likesCount: 17},
        {id: 5, message: "Понятно", likesCount: 19},
    ],
}
test('length of post should be incremented ', () => {
    //1 Создаем исходне данныйе
    const action = addPostCreator("Тестовый текст")
    //2 Запускаем редюсер с нужным акшеном
    const newState = profileReducer(state, action)
    //3 Проверяем ожидание длинна массива станет равной 5
    expect(newState.posts.length).toBe(6);
})

test('message of new post should be correct', () => {
    //1 Создаем исходне данныйе
    const action = addPostCreator("Тестовый текст")
    //2 Запускаем редюсер с нужным акшеном
    const newState = profileReducer(state, action)
    //3 Проверяем ожидание длинна массива станет равной 5
    expect(newState.posts[5].message).toBe("Тестовый текст")
})

test('after deleting length shouldt be decrement if id is incorrect ', () => {
    //1 Создаем исходне данныйе
    const action = deletePost(100)
    //2 Запускаем редюсер с нужным акшеном
    const newState = profileReducer(state, action)
    //3 Проверяем ожидание длинна массива станет равной 5
    expect(newState.posts.length).toBe(5)
})

test('after deleting length of message should be decrement', () => {
    //1 Создаем исходне данныйе
    const action = deletePost(1)
    //2 Запускаем редюсер с нужным акшеном
    const newState = profileReducer(state, action)
    //3 Проверяем ожидание длинна массива станет равной 5
    expect(newState.posts.length).toBe(4)
})

