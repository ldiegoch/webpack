import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';

import issues from './clinical-issues';
import specialties from './specialties';
import patients from './patients';
import users from './users';

$('<h1>Referrals</h1>').appendTo('body');

$('<h2>Patients</h2>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const patient of patients) {
    $('<li></li>').text(patient).appendTo(ul);
}

$('<h2>Specialties</h2>').appendTo('body');
const ulSpecialties = $('<ul></ul>').appendTo('body');
for (const specialty of specialties) {
    $('<li></li>').text(specialty).appendTo(ulSpecialties);
}

$('<h2>Issues</h2>').appendTo('body');
const ulIssues = $('<ul></ul>').appendTo('body');
for (const issue of issues) {
    $('<li></li>').text(issue).appendTo(ulIssues);
}

$('<h2>Users</h2>').appendTo('body');
const ulUsers = $('<ul></ul>').appendTo('body');
for (const user of users) {
    $('<li></li>').text(user).appendTo(ulUsers);
}