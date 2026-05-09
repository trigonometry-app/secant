<script lang="ts">
  import iconClose from '@ktibow/iconset-material-symbols/close-rounded';
  import { shortenCategory } from '../lib/naming';
  import PredictCategory from './PredictCategory.svelte';
  import type { ClassGrade } from '../lib/types';
  import { Icon } from 'm3-svelte';

  let {
    categories,
    futureAssignments,
    grade,
    close,
  }: ClassGrade & {
    grade: number;
    close: () => void;
  } = $props();

  let simulating = $state(0);
  let categoryName = $derived(Object.keys(categories)[simulating]);

  $effect(() => {
    if (simulating >= Object.keys(categories).length)
      simulating = Object.keys(categories).length - 1;
  });
</script>

<h2>
  <select bind:value={simulating}>
    {#each Object.keys(categories) as name, i (i)}
      <option value={i}>{shortenCategory(name).toUpperCase()}</option>
    {/each}
  </select>
  <span>SIMULATOR</span>
  <div style:flex-grow="1"></div>
  <button onclick={close}>
    <Icon icon={iconClose} />
  </button>
</h2>
<PredictCategory category={categoryName} {categories} {futureAssignments} {grade} />

<style>
  h2 {
    display: flex;
    height: 4.5rem;
    margin: -1.5rem;
    font-size: 1rem;
    color: var(--m3c-on-surface-variant);

    > select {
      padding-left: 1.5rem;
    }
    > span {
      align-self: center;
    }
    > button {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
    }
  }
</style>
