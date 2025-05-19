<script>
	const pathname = '/about';
	let elements = {};

	let parent = $state(null);
	let active_element = $state(elements[pathname]);

	const is_active_link = (link) => {
		return link === '/' ? link === pathname : pathname.startsWith(link);
	};

	const MAIN_LINKS = [
		{
			label: 'قصصي',
			href: '/'
			// icon: Home,
		},
		{
			label: 'مكتبة',
			href: '/library'
			// icon: Book,
		},
		{
			label: 'ألعاب',
			href: '/games'
			// icon: Gamepad2,
		},
		{
			label: 'ملف شخصي',
			href: '/profile'
			// icon: User,
		},
		{
			label: 'إعدادات',
			href: '/settings'
			// icon: Settings,
		}
	];
	export const CONSTANTS = {
		MENU_BAR_HEIGHT: 70,
		HEADER_HEIGHT: 40
	};
</script>

<nav
	class="bg-background border-t-accent/10 fixed right-0 bottom-0 left-0 z-50 flex justify-center rounded-t-sm border-t text-gray-500 shadow-xl"
	style="height: {CONSTANTS.MENU_BAR_HEIGHT}px"
>
	<ul
		class={' ml:min-w-lg relative flex h-full min-w-2xs  gap-1  sm:min-w-xs md:min-w-[22rem] lg:min-w-2xl'}
	>
		{#each MAIN_LINKS as link}
			<li
				class={['h-full w-1/5 flex-1 bg-yellow-200 ', is_active_link(link.href) && 'text-accent ']}
			>
				{@render tab(link)}
			</li>
		{/each}
	</ul>
</nav>

{#snippet tab(link)}
	<a
		bind:this={elements[link.href]}
		class={[
			'smooth-bounce flex h-full flex-col items-center justify-center ',
			is_active_link(link.href) && '-translate-y-[10px]'
		]}
		href={link.href}
	>
		<!-- <link.icon class={['text-4xl ', is_active_link(link.href) && 'text-accent']} /> -->
		<span
			class={[
				'text-accent ml:text-xs absolute translate-y-6 text-[9px] font-semibold tracking-wider text-wrap opacity-0 sm:text-[11px]',
				is_active_link(link.href) && 'opacity-100'
			]}>{link.label}</span
		>
	</a>
{/snippet}
