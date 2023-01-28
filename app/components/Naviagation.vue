<template>
	<GridLayout columns="*,100,100,100,*" class="my-navigation">
		<GridLayout rows="auto,20" col="1" >
			<Label width="35"  text.decode="&#xf042;" class="fas text-center" ></Label>
			<Label text="Home" row="1" class=" text-center"></Label>
		</GridLayout>
		<GridLayout rows="auto,30" col="2" >
			<Label width="35"  text.decode="&#xf042;" class="fas text-center" ></Label>
			<Label text="Browse" row="1" class=" text-center"></Label>
		</GridLayout>
		<GridLayout rows="auto,30" col="3" >
			<Label width="35"  text.decode="&#xf042;" class="fas text-center" ></Label>
			<Label text="Main" row="1" class=" text-center"></Label>
		</GridLayout>
	</GridLayout>
</template>

<style scoped>
.my-navigation {
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 0%,
		#ffffff 70%,
		#ffffff 90.92%
	);
	margin: 0;
	width: 100%;
	padding: 20 0 0 0;
}
</style>