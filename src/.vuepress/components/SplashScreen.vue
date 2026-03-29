<template>
  <Transition name="splash-fade" @after-leave="done = true">
    <div v-if="visible" class="splash-overlay" aria-hidden="true">
      <div class="splash-content">
        <!-- Logo -->
        <div class="splash-logo-wrapper">
          <img src="/logo.svg" alt="ERPyA" class="splash-logo" />
        </div>

        <!-- Brand name -->
        <div class="splash-brand">
          <span class="splash-brand-main">ERP</span><span class="splash-brand-accent">yA</span>
        </div>

        <!-- Loading bar -->
        <div class="splash-bar-track">
          <div class="splash-bar-fill" />
        </div>

        <p class="splash-tagline">Cargando documentación…</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(true);
const done = ref(false);

onMounted(() => {
  const hide = () => {
    visible.value = false;
  };

  if (document.readyState === "complete") {
    setTimeout(hide, 3000);
  } else {
    window.addEventListener("load", () => setTimeout(hide, 3000), { once: true });
    setTimeout(hide, 5000);
  }
});
</script>

<style scoped>
/* ─── Overlay ──────────────────────────────────────────────────────────── */
.splash-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0e1a;
  /* Gradiente sutil de fondo */
  background-image:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(33, 150, 243, 0.18) 0%, transparent 70%),
    radial-gradient(ellipse 60% 50% at 80% 100%, rgba(99, 60, 220, 0.12) 0%, transparent 70%);
}

/* ─── Contenido central ────────────────────────────────────────────────── */
.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  animation: splash-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes splash-rise {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Logo ─────────────────────────────────────────────────────────────── */
.splash-logo-wrapper {
  width: 110px;
  height: 110px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 0 1px rgba(33, 150, 243, 0.25),
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 80px rgba(33, 150, 243, 0.15);
  animation: logo-pulse 2s ease-in-out infinite;
}

@keyframes logo-pulse {
  0%, 100% { box-shadow: 0 0 0 1px rgba(33, 150, 243, 0.25), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(33,150,243,0.15); }
  50%       { box-shadow: 0 0 0 1px rgba(33, 150, 243, 0.5),  0 20px 60px rgba(0,0,0,0.5), 0 0 120px rgba(33,150,243,0.3); }
}

.splash-logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
  filter: drop-shadow(0 4px 20px rgba(33, 150, 243, 0.5));
}

/* ─── Brand text ───────────────────────────────────────────────────────── */
.splash-brand {
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-top: 0.25rem;
}

.splash-brand-main {
  color: #ffffff;
}

.splash-brand-accent {
  color: #2196f3;
}

/* ─── Loading bar ──────────────────────────────────────────────────────── */
.splash-bar-track {
  width: 160px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.splash-bar-fill {
  height: 100%;
  width: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #2196f3, #64b5f6, #2196f3);
  background-size: 200% 100%;
  animation:
    bar-grow 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards,
    bar-shimmer 1.2s linear infinite;
}

@keyframes bar-grow {
  0%   { width: 0%; }
  60%  { width: 80%; }
  100% { width: 100%; }
}

@keyframes bar-shimmer {
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
}

/* ─── Tagline ──────────────────────────────────────────────────────────── */
.splash-tagline {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.35);
  font-family: "Inter", system-ui, sans-serif;
  letter-spacing: 0.04em;
  margin: 0;
}

/* ─── Transition de salida ─────────────────────────────────────────────── */
.splash-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-fade-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
