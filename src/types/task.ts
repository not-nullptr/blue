export interface Task {
	flow_token: string;
	subtask_inputs: SubtaskInput[];
}

export interface SubtaskInput {
	js_instrumentation?: JSInstrumentation;
	subtask_id:
		| "LoginJsInstrumentationSubtask"
		| "LoginEnterUserIdentifierSSO"
		| "EmailVerification"
		| "SignupReview"
		| "ArkoseEmail"
		| "SignupSettingsListEmail"
		| "Signup"
		| "EnterPassword"
		| "SelectAvatar"
		| "UsernameEntryBio"
		| "NotificationsPermissionPrompt";
	settings_list?: SettingsList;
	[key: string]: any; // dynamic(tm)
}

export interface JSInstrumentation {
	link: string;
	response: string;
}

export interface SettingsList {
	link: string;
	setting_responses: SettingResponse[];
}

export interface SettingResponse {
	key: string;
	response_data: ResponseData;
}

export interface ResponseData {
	text_data: TextData;
}

export interface TextData {
	result: string;
}

export interface TaskRes {
	flow_token: string;
	status: string;
	subtasks: any[];
}

export interface Subtask {
	enter_password?: EnterPassword;
	subtask_back_navigation?: string;
	subtask_id: string;
	open_link?: OpenLink;
	check_logged_in_account?: CheckLoggedInAccount;
}

export interface CheckLoggedInAccount {
	false_link: ELink;
	true_link: ELink;
	user_id: string;
}

export interface ELink {
	link_id: string;
	link_type: string;
}

export interface EnterPassword {
	footer: Footer;
	hint: string;
	next_link: NextLinkClass;
	os_content_type: string;
	password_field: PasswordField;
	primary_text: Text;
	skip_password_validation: boolean;
	user_identifier_display_type: string;
	username: string;
}

export interface Footer {
	footnote_text: Text;
	style: string;
}

export interface Text {
	entities: PrimaryTextEntity[];
	text: string;
}

export interface PrimaryTextEntity {
	from_index: number;
	navigation_link: Link;
	to_index: number;
}

export interface Link {
	link_id: string;
	link_type: string;
	url: string;
}

export interface NextLinkClass {
	label: string;
	link_id: string;
	link_type: string;
	subtask_id?: string;
}

export interface PasswordField {
	content_type: string;
	detail_text: DetailText;
	hint_text: string;
}

export interface DetailText {
	entities: DetailTextEntity[];
	text: string;
}

export interface DetailTextEntity {
	from_index: number;
	navigation_link: NextLinkClass;
	to_index: number;
}

export interface OpenLink {
	link: Link;
}
