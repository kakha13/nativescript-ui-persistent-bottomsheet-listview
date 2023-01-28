<template>
    <Page actionBarHidden="true" statusBarStyle="dark">
        <RootLayout>
            <GridLayout height="100%">
                <Frame id="frame" height="100%">
                  <Home/>  
                </Frame>
                <Naviagation verticalAlignment="bottom" />
            </GridLayout>
        </RootLayout>
    </Page>
</template>

<script>
import Home from "./Home.vue";
import Naviagation from "./Naviagation.vue";

export default {
    components: { Home,Naviagation }
};
</script>

