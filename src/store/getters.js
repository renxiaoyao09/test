const getters = {
  token: state => state.app.token,
  me: state => state.app.me,
  settingListDate: state => state.settings.settingListDate,
  messageListDate: state => state.settings.messageListDate,
  systemSettingListDate: state => state.settings.systemSettingListDate,
}
export default getters
