import React from 'react';
import { Layout } from './styles';

const SectionLayout = ({ children, backgroundColor, id }) => {


    return (
        <Layout id={id} backgroundColor={backgroundColor}>
            { children }
        </Layout>
    );
}

export default SectionLayout;