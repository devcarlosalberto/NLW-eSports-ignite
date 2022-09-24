import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
    id: string,
    title: string,
    _count: {
        Ads: number
    }
    banner: string
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>

            <ImageBackground
                style={styles.cover}
                source={{ uri: data.banner}}
            >
                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >

                    <Text style={styles.name}>
                        {data.title}
                    </Text>

                    <Text style={styles.ads}>
                        {data._count.Ads} anúncio(s)
                    </Text>

                </LinearGradient>
            </ImageBackground>
            
        </TouchableOpacity>
    )
}