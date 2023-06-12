<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit33ec5422f3fc53f8938b59faa073c6ca
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit33ec5422f3fc53f8938b59faa073c6ca::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit33ec5422f3fc53f8938b59faa073c6ca::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit33ec5422f3fc53f8938b59faa073c6ca::$classMap;

        }, null, ClassLoader::class);
    }
}
