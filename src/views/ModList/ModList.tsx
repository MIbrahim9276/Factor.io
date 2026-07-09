import EmptyModList from "./Empty";
import ErrorModList from "./Error";
import LoadingModList from "./Loading";
import MainModList from "./Main";

export default function ModList() {
    const isEmpty = false;
    const isError = false;
    const isLoading = false;

    if (isLoading) {
        return <LoadingModList />
    }

    if (isError) {
        return <ErrorModList />
    }

    if (isEmpty) {
        return <EmptyModList />;
    }

    return (
        <MainModList />
    );
}