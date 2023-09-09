import { useMobxStores } from "@/project/store";
import Store from "@/project/store/Store";
import { observer } from "mobx-react-lite";
import { FC } from "react";

interface ConditionalProps {
	notOn?: 'desktop' | 'mobile';
	desktop?: JSX.Element | null;
	mobile?: JSX.Element | null;
	condition?: boolean;
}

const Conditional: FC<ConditionalProps> = observer(({ notOn, mobile, desktop, condition, children }) => {
	const store: Store = useMobxStores();
	if (condition !== null && condition) {
		return <>{children}</>;
	}
	if ((notOn === 'desktop' || !!mobile) && !store.isDesktop) {
		return (
			<>
				{children ?? mobile}
			</>
		);
	}
	if ((notOn === 'mobile' || !!desktop) && store.isDesktop) {
		return (
			<>
				{children ?? desktop}
			</>
		);
	}
	return null;
});

export default Conditional;
