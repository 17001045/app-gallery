<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/photos">photos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/photo-upload">photo upload</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <slot></slot>
  </div>
</template>
<script lang="ts" src="./code.ts"></script>