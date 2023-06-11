interface Props {
    folder: string | undefined
}

const EmailDetailsDefaultLayout = (props: Props) => {
    const { folder } = props;

    return (
        <>
            { folder ? (
                <div className='flex w-3/4 items-center justify-center text-center'>
                    <p className='text-3xl'>Please choose an email</p>
                </div>
            ) : (
                <div className='flex w-3/4 items-center justify-center text-center'>
                    <p className='text-3xl'>Please choose a folder first</p>
                </div>
            )}
        </>
    )
}

export default EmailDetailsDefaultLayout;
