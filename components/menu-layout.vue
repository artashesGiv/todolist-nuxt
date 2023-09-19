<template>
    <aside ref="menu" class="menu" :class="{ menu_collapsed: isCollapsed }">
        <nav class="menu__navigation">
            <ul class="menu__link-list">
                <li v-for="route in routes">
                    <NuxtLink
                        :to="route.path"
                        class="menu__link"
                        active-class="menu__link_active"
                    >
                        <ui-icon-base
                            class="menu__link-icon"
                            :name="route.meta.icon"
                        />
                        <p v-if="!isCollapsed" class="menu__link-text">
                            {{ route.name }}
                        </p>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
export type MenuLayoutProps = {
    isCollapsed: boolean
}

const { isCollapsed } = defineProps<MenuLayoutProps>()

const routes = useRouter()
    .getRoutes()
    .sort((a, b) => a.meta.position - b.meta.position)
</script>

<style scoped lang="scss">
.menu {
    background-color: $brand;
    width: toRem(210);
    flex-direction: column;
    align-items: center;
    transition: width 0.3s ease;
    padding: 0 toRem(16);
    box-sizing: border-box;

    &_collapsed {
        width: toRem(48);
    }

    &__link {
        display: flex;
        gap: toRem(16);
        align-items: center;
        color: $base;
        font-weight: 400;
        height: toRem(21);

        &-list {
            display: flex;
            flex-direction: column;
            gap: toRem(30);
            margin-top: toRem(60);
        }

        &-icon,
        &-text {
            font-size: toRem(16);
            line-height: toRem(21);
        }

        &-text {
            transition: color 0.3s ease;
            white-space: nowrap;
        }

        &_active {
            color: $baseActive;
        }

        &:hover {
            color: $baseHover;
        }
    }
}
</style>
