import React, {Component, PropTypes} from 'react';
import {EventEmitter} from "events";
import UserData from "../components/UserData.react";

const cmp = function(a, b, sort) {
    if (sort.order) {
        if(a < b) return -1;
        if(a > b) return 1;
    } else {
        if(a > b) return -1;
        if(a < b) return 1;
    }
    return 0;
};

const defineSecondSortField = (currentSortField, allSortTypes) => allSortTypes.filter(item => item !== currentSortField)[0];

const findUsersBySearchField = (searchValue, allUsers) => {
    if (!searchValue) {
        return allUsers;
    } else {
        const reg = new RegExp(`^${searchValue}`, 'i');
        allUsers = allUsers.filter(user => {
            return user.name.match(reg)
        });
    }
    return allUsers;
};

const sortByField = (collection, sortObject) => {
    if (!Object.keys(sortObject.currentSort).length) return collection;
    const secondSortField = defineSecondSortField(sortObject.currentSort.field, Object.keys(sortObject.types));
    return collection.sort((a, b) => {
        return cmp(a[sortObject.currentSort.field], b[sortObject.currentSort.field], sortObject.currentSort) || cmp(a[secondSortField], b[secondSortField], true);
    });
};

const getUsers = (allUsers, sortData, searchInput) => {
    allUsers = findUsersBySearchField(searchInput, allUsers);
    allUsers = sortByField(allUsers, sortData);
    return allUsers;
};

const UserList = ({allUsers, searchInput, sortData}) => (
    <div class="col-sm-8 col-md-9 col-lg-10">
        <table class="user-list table table-striped">
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {getUsers(allUsers, sortData, searchInput).map((user) => {
                return (
                    <UserData key={user.id} user={user}/>
                );
            })}
            </tbody>
        </table>
    </div>
);

export default UserList;