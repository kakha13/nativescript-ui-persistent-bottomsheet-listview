<template>
    <Page actionBarHidden="true" @loaded="pageLoaded">

        <BottomSheet :stepIndex="stepIndex" scrollViewId="scrollView" :steps="steps">
            <StackLayout height="300" class="w-full c-bg-white">
                <Label :text="item" class="text-center c-black h-full"></Label>
            </StackLayout>

            <GridLayout ~bottomSheet class=" bg-primary w-full" rows="10, *">
                <Label row="0" text=" " class="text-center" marginTop="10" marginBottom="10" borderRadius="5" width="50"
                    height="3" backgroundColor="#E1E1E1" @tap="stepIndex = 1" />

                <ListView id="scrollView" :height="pageHeight" :items="items" row="1" @itemTap="onItemTap">
                    <v-template>
                        <GridLayout columns="120,*" class="align-middle text-left" paddingLeft="24" paddingRight="24"
                            paddingTop="6" paddingBottom="6">
                            <Label col="0" :text="item.name" class="" />
                            <Label col="1" :text="item.price" class="" textWrap="true" />
                        </GridLayout>
                    </v-template>
                </ListView>
            </GridLayout>
        </BottomSheet>
    </Page>
</template>

<script>
import { ObservableArray } from '@nativescript/core';

export default {
    data() {
        return {
            stepIndex: 0,
            steps: [130, 300, 1000],
            pageHeight: null,
            item: JSON.stringify({}),
            items: new ObservableArray([{"name":"Test 1","price":2.99},{"name":"Test 2","price":2.99},{"name":"Test 3","price":2.99},{"name":"Test 4","price":2.99},{"name":"Test 5","price":2.99},{"name":"Test 6","price":2.99},{"name":"Test 7","price":2.99},{"name":"Test 8","price":2.99},{"name":"Test 9","price":2.99},{"name":"Test 10","price":2.99},{"name":"Test 11","price":2.99},{"name":"Test 12","price":2.99},{"name":"Test 13","price":2.99},{"name":"Test 14","price":2.99},{"name":"Test 15","price":2.99},{"name":"Test 16","price":2.99},{"name":"Test 17","price":2.99},{"name":"Test 18","price":2.99},{"name":"Test 19","price":2.99},{"name":"Test 20","price":2.99},{"name":"Test 21","price":2.99},{"name":"Test 22","price":2.99},{"name":"Test 23","price":2.99},{"name":"Test 24","price":2.99},{"name":"Test 25","price":2.99},{"name":"Test 26","price":2.99}])
        }
    },
    computed: {
        message() {
            return "Blank {N}-Vue app";
        }
    },
    methods: {
        onItemTap(args) {
            this.item = JSON.stringify(args.item)
        },
        pageLoaded(args) {
            let view = args.object;
            setTimeout(() => {
                let screenheight = view.getActualSize().height;
                this.steps[1] = screenheight - 300;
                this.steps[2] = screenheight;
                this.stepIndex = 1;
                this.pageHeight = screenheight;
            }, 300);
        }
    },
};
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
    @include colorize($color: accent);
}

.info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
}
</style>
