<template>
  <form class="justify-center card-actions flex flex-col gap-2 items-center">
    <label class="input" for="email">
      <span>Email</span>
      <input id="email" type="email" name="email" autocomplete="email" required>
    </label>
    <label class="input" for="password">
      <span>Password</span>
      <input id="password" type="password" name="password" autocomplete="current-password" required>
    </label>
    <label class="input" for="confirm-password">
      <span>Confirm Password</span>
      <input id="confirm-password" type="password" name="confirm-password" autocomplete="new-password" required>
    </label>
    <button type="submit" class="btn btn-primary">
      Sign Up
    </button>
  </form>
</template>
