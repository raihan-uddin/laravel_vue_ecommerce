<template>
    <div id="public_master">
        <h2>Public Master</h2>
<!--        <example-component></example-component>-->
        <router-link to="/test">Test</router-link>
        <router-view></router-view>
    </div>
</template>


<script>
import ExampleComponent from '../ExampleComponent'
export default {
    name: "PublicMaster",
    components: {
        ExampleComponent
    }
}
</script>
