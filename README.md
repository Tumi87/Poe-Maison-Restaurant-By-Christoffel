# Maison Christoffel — Chef's Menu
name :Itumeleng Ndlovu 
student number: st10515918


> **Demo video (YouTube, Unlisted):** `PASTE YOUR LINK HERE`

## Part 3 change log (changes since Part 2)

### New functionality
- **Manage menu items:** edit, update and delete dishes (`EditDishScreen`, and Delete on the details screen) with a confirmation before deleting. Changes show immediately everywhere through `MenuContext`.
- **Search:** search by dish name, with a **clear (✕) button**.
- **Filter:** filter by course (All / Starters / Mains / Desserts) with **live counts** on each chip and a "Showing X of Y dishes" line.
- **Clear search & filter:** one tap resets both; the "no results" message has a **Show all dishes** button.
- **Menu statistics:** a "Menu Overview" panel shows the total number of dishes, the average price, and the number of dishes (plus average price) in each course.
- **Dish photos:** choose, change or remove a photo on the Add and Edit screens (`expo-image-picker`).

### Refactoring (code quality)
- **Reusable components** (`src/components/`): `SearchBar`, `DishCard`, `EmptyState`, `StatsPanel`, `ImagePickerField`.
- **Reusable functions** (`src/utils/`): `validateDishForm`, `parsePrice` (`validation.ts`); `formatPrice`, `dishCount` (`format.ts`).
- The dish validation that was duplicated in the Add and Edit screens is now one shared function.
- All app code now lives in `src/` (screens, context, navigation, theme, types, utils, components); `App.tsx` imports from there and registers the new `EditDish` screen.
- `SafeAreaView` now comes from `react-native-safe-area-context`, and `App.tsx` wraps the app in `SafeAreaProvider`.

### Validation & user-experience improvements
- Dish name max 60 characters, preparation notes min 10 characters, price max R10 000; price accepts `285,50`.
- Inline error messages under each field and success alerts after add / update.
- Dishes without a photo show a letter placeholder.
- Separate empty-state messages for an empty menu and for no search results.
- Accessibility labels on the search box, clear button and dish rows.

### Project structure
```
App.tsx
assets/images/
src/
├── components/   DishCard, EmptyState, ImagePickerField, SearchBar, StatsPanel
├── context/      MenuContext.tsx
├── navigation/   types.ts
├── screens/      Splash, Login, ChefMenu, AddDish, EditDish, ItemDetails
├── theme/        colors.ts
├── types/        index.ts
└── utils/        format.ts, validation.ts
```

---

# Part 2 documentation (original)


1. `src/screens/SplashScreen.tsx` — Welcome/Splash
2. `src/screens/LoginScreen.tsx` — Sign Up / Login
3. `src/screens/AddDishScreen.tsx` — Add New Dish (with course dropdown + validation)
4. `src/screens/ChefMenuScreen.tsx` — Chef's Menu list (search, filter, stats)
5. `src/screens/ItemDetailsScreen.tsx` — Item Details ("Dish Dossier")
6. `src/screens/EditDishScreen.tsx` — Edit Menu Item (pre-filled, update or delete)


```
npm install
npx expo start
```

.# MAST-PART-2-CHRISOTFFEL-RESTAURANT


Maison Christoffel — Restaurant Menu App 

A React Native (Expo) mobile app for managing a restaurant's chef menu — browse dishes by course, view detailed "dish ," and add, edit, or remove menu items. 

 

Features 

Splash / Welcome screen — branded landing screen with a call to action into the app. 

Login screen — email/password sign-in (no backend auth; any non-empty email and password logs you in, matching the scope of this assignment). 

Chef's Menu — full dish list with filter pills (All Courses, Starter, Main, Dessert), showing name, course tag, short description, price, and a thumbnail image for each dish. 

Dish Dossier (item detail) — full dish view with image, price, preparation notes, and Edit / Delete actions. 

Add New Dish — form to create a new menu item (name, description, price, course). 

Edit Dish — same form, pre-filled, for updating an existing item. 

Delete Dish — with a confirmation prompt before removing an item. 

 

Tech Stack 

Layer 

Choice 

Framework 

React Native via Expo 

Language 

TypeScript 

Navigation 

@react-navigation/native-stack 

State 

React Context (MenuContext) — in-memory only 

Styling 

React Native

 

Project Structure 

ChristoffelRestaurantApp/ 
├── App.tsx                     # Navigation stack + MenuProvider wrapper 
├── types.ts                    # Course, Dish, COURSES 
├── navigation/ 
│   └── types.ts                # RootStackParamList (route + param types) 
├── theme/ 
│   └── colors.ts                # colors + fonts used across all screens 
├── context/ 
│   └── MenuContext.tsx          # dish state, CRUD functions, seed data 
└── screens/ 
    ├── SplashScreen.tsx         # Welcome / landing screen 
    ├── LoginScreen.tsx          # Sign up / login 
    ├── ChefMenu.tsx              # Menu list with course filters 
    ├── ItemDetailScreen.tsx     # Dish Dossier (view/edit/delete entry) 
    ├── DishForm.tsx              # Shared form used by Add + Edit screens 
    ├── AddDishScreen.tsx        # Wraps DishForm for creating a dish 
    └── EditDishScreen.tsx       # Wraps DishForm for editing a dish 
  

 

Prerequisites 

Node.js (LTS recommended) and npm 

Expo Go app on your phone (iOS or Android) — to run the app on a real device, or a simulator/emulator set up locally 

VS Code (or any editor) with the TypeScript extension for inline type-checking 

 

Setup 

Open the project root in your terminal — the folder that directly contains package.json: 

cd path/to/ChristoffelRestaurantApp 
  

Install dependencies: 

npm install 
  

Install navigation + supporting packages (if not already present in package.json): 

npx expo install @react-navigation/native @react-navigation/native-stack 
npx expo install react-native-screens react-native-safe-area-context 
npm install --save-dev @types/node 
  

Start the dev server: 

npx expo start 
  

Scan the QR code with Expo Go on your phone, or 

Press w in the terminal to open a web preview, or 

Press a / i for an Android/iOS simulator (if configured). 

 

Navigation Flow 

Splash → Login → ChefMenu ──┬──> ItemDetail ──> EditDish ──> ItemDetail 
                             └──> AddDish ──> ChefMenu 
  

Splash → Login (replace, no back button) 

Login → ChefMenu (replace, no back button) 

ChefMenu → ItemDetail (tap a dish row) 

ChefMenu → AddDish (tap the floating + button) 

ItemDetail → EditDish (tap Edit Item) 

ItemDetail → deletes and returns to ChefMenu (tap Delete Item, confirm) 

AddDish / EditDish → returns to ChefMenu / ItemDetail on save, or back on cancel 

 

Known Limitations 

No persistence — all dishes reset to the seed list on app restart. To persist data, swap MenuContext's useState for AsyncStorage or a real backend. 

No real authentication — the login screen doesn't validate credentials against anything; it's a UI-only gate. 

Images are remote URLs (Unsplash), not bundled local assets, so the app needs an internet connection to display dish photos. 


 

Credits 

Design reference: "Maison Christoffel" mobile app mockup (Cape Town / Franschhoek), including Welcome, Sign Up/Login, Chef's Menu, Dish Dossier, and Add New Dish screens. 

Youtube link: 
