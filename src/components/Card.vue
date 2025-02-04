<template>
  <div
    class="lg:p-[2.5rem] p-[1.5rem] bg-design-grey-800 w-[327px] md:w-[28.5rem] lg:w-[24rem] md:h-[611px] h-[579px] flex flex-col gap-[1.5rem] rounded-xl"
  >
    <div class="flex justify-center items-center">
      <img class="max-w-[5.5rem] max-h-[5.5rem]" :src="data.img" alt="" />
    </div>

    <div class="text-center">
      <div class="font-inter text-2xl leading-normal text-white font-bold">{{ data.name }}</div>
      <div class="font-inter leading-normal text-sm text-design-green font-bold">
        {{ data.city }}
      </div>
    </div>

    <div class="text-center">
      <div class="text-white leading-normal text-sm font-inter">"{{ data.skill }}"</div>
    </div>

    <div class="flex flex-col gap-[1rem]">
      <a
        v-for="list in data.links"
        :href="list.link"
        class="no-underline py-[0.75rem] bg-design-grey-700 text-white flex justify-center items-center hover:bg-design-green hover:text-gray-700 font-bold"
        >{{ list.name }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  setup(props) {
    console.log(props.data)
  },
}
</script>
