type TextInputProps = {
	textShown: TextShown;
    inputField: InputField;
};

export default function TextInput(props: TextInputProps) {
    <>
        <label>
            Text input:
        </label>
        <input className="border rounded w-full py-2 px-3" id="name" type="text" placeholder="{textShown}" />
    </>
}