'use strict'
const store = require('./../store.js')

const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You signed up successfully! Welcome ' + response.user.email + '!')
  $('#message').show().removeClass().addClass('success')
  console.log('createSuccess')
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed! Try different email address.')
  $('#message').show().removeClass().addClass('failure')
  console.log('createFailure')
}

const signInSuccess = function (response) {
  console.log(response) // here we can see the token
  $('#message').text('Sign in was successful! Welcome back ' + response.user.email + '!')
  $('#message').show().removeClass().addClass('success')
  $('form').trigger('reset')
  store.user = response.user
}
const signInFailure = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text("Sign in failed! Your email and password don't match our records.")
  $('#message').show().removeClass().addClass('failure')
  store.user = response.user
}

const changePasswordSuccess = function (response) {
  console.log(response) // here we can see the token
  $('#message').text('Your password is changed.')
  $('#message').show().removeClass().addClass('success')
  $('form').trigger('reset')
}
const changePasswordFailure = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Password change was unsuccessful.')
  $('#message').show().removeClass().addClass('failure')
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You signed out successfully!')
  $('#message').show().removeClass().addClass('success')
  store.user.token = null
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Your sign out failed.')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  createSuccess,
  createFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
