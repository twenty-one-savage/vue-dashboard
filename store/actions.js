/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
// START Mock-data
// Иммитация задержки ответа (прям как с настоящего сервера)
const sleep = m => new Promise(r => setTimeout(r, m))
const companies = [
  {
    id: 1,
    name: "Velvette",
    logo: require("@/assets/images/logo/Velvette.png"),
    slug: "velvette",
    props: [
      {
        id: 1,
        name: "Выполнение годового плана по производству",
        value: 33,
        units: "%"
      },
      {
        id: 2,
        name: "Сумма на р/с",
        value: "11 541 012",
        units: "₽"
      },
      {
        id: 3,
        name: "В производстве",
        value: 73
      }
    ]
  },
  {
    id: 2,
    name: "Multideck",
    logo: require("@/assets/images/logo/Multideck.png"),
    slug: "multideck",
    props: [
      {
        id: 1,
        name: "Выполнение годового плана по производству",
        value: 41,
        units: "%"
      },
      {
        id: 2,
        name: "Сумма на р/с",
        value: "9 455 233",
        units: "₽"
      },
      {
        id: 3,
        name: "В производстве",
        value: 133
      }
    ]
  },
  {
    id: 3,
    name: "Voldone",
    logo: require("@/assets/images/logo/Voldone.png"),
    slug: "voldone",
    props: [
      {
        id: 1,
        name: "Выполнение годового плана по производству",
        value: 83,
        units: "%"
      },
      {
        id: 2,
        name: "Сумма на р/с",
        value: "8 323 456",
        units: "₽"
      },
      {
        id: 3,
        name: "В производстве",
        value: 91
      }
    ]
  }
]
// END Mock-data
const actions = {
  async getCompaniesList({ commit }) {
    try {
      await sleep(1000)
      await commit("SET_COMPANIES_LIST", companies)
    } catch (err) {
      console.log(err)
      throw new Error("Внутреняя ошибка сервера, сообщите администратору")
    }
  },
  async getCurrentCompany({ commit }, { route }) {
    await sleep(1000)
    const company = companies.find(
      company => company.slug === route.params.CompanyId
    )
    await commit("SET_CURRENT_COMPANY", company)
  },
  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  updateVerticalNavMenuWidth({ commit }, width) {
    commit("UPDATE_VERTICAL_NAV_MENU_WIDTH", width)
  },

  // VxAutoSuggest
  updateStarredPage({ commit }, payload) {
    commit("UPDATE_STARRED_PAGE", payload)
  },

  // The Navbar
  arrangeStarredPagesLimited({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_LIMITED", list)
  },
  arrangeStarredPagesMore({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_MORE", list)
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay({ commit }) {
    commit("TOGGLE_CONTENT_OVERLAY")
  },
  updateTheme({ commit }, val) {
    commit("UPDATE_THEME", val)
  },

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  updateUserInfo({ commit }, payload) {
    commit("UPDATE_USER_INFO", payload)
  }
}

export default actions
